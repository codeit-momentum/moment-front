import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useTodoList from '../../../hooks/queries/useTodoList';

/**
 * ToDoListProps 인터페이스
 * @property mode - 'auto': API에서 데이터를 불러오는 모드, 'manual': 사용자 직접 입력 모드
 * @property duration - 진행 기간 (일 수)
 * @property onSave - 저장 시 호출될 콜백 함수
 */
interface ToDoListProps {
  mode: 'auto' | 'manual';
  duration: number;
  todoList: string[];
  isLoading: boolean;
  onSave: (todoList: string[]) => void;
}

const ToDoListComponent = ({ mode, duration, onSave }: ToDoListProps) => {
  // 편집 모드 상태 관리: 수동 모드일 경우 초기값 true
  const [isEditing, setIsEditing] = useState(mode === 'manual');
  const [isConfirmed, setIsConfirmed] = useState(false); //확정상태 관리
  // 할 일 목록 상태 관리
  const [todos, setTodos] = useState<string[]>([]);

  // React Query를 사용하여 자동 모드의 데이터 가져오기
  const { data, isLoading } = useTodoList(mode);

  // 데이터가 변경되면 todos 상태 업데이트
  useEffect(() => {
    if (data && data.todoList) {
      setTodos(data.todoList);
    }
  }, [data]);

  /**
   * 새로운 할 일 항목 추가
   * - 편집 모드일 때만 동작
   * - 새 항목의 id는 현재 목록 길이 + 1
   */
  const handleAddTodo = () => {
    if (isEditing) {
      setTodos([...todos, '']);
    }
  };

  /**
   * 할 일 내용 수정
   * @param id - 수정할 항목의 id
   * @param content - 새로운 내용
   */
  const handleEditTodo = (id: number, content: string) => {
    const newTodos = [...todos];
    newTodos[id] = content;
    setTodos(newTodos);
  };

  /// 수정완료 핸들러
  const handleEditComplete = () => {
    if (todos.every((todo) => todo.trim() === '')) {
      alert('최소 한 개의 할 일을 입력해주세요.');
      return;
    }
    setIsEditing(false);
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    const validTodos = todos.filter((todo) => todo.trim() !== '');
    if (validTodos.length === 0) {
      alert('최소 한 개의 할 일을 입력해주세요.');
      return;
    }
    onSave(validTodos);
    setIsConfirmed(true);
    setIsEditing(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <S.ToDoListContainer>
      <S.Divider />
      <S.Label>
        {duration}일 동안 진행할 모멘트는{'\n'} 다음과 같습니다!
      </S.Label>
      <S.ToDoBox>
        <S.ToDoBoxLabel>방법</S.ToDoBoxLabel>
        <S.ToDoList>
          {todos.map((todo, index) => (
            <S.ToDoItem key={index}>
              <input
                type="checkbox"
                disabled={!isEditing} //수정상태에서만 활성화
                defaultChecked={false}
              />
              {isEditing ? (
                <S.Input
                  type="text"
                  value={todo}
                  onChange={(e) => handleEditTodo(index, e.target.value)}
                  placeholder="할 일을 입력하세요"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleAddTodo();
                  }}
                />
              ) : (
                <label>{todo}</label>
              )}
            </S.ToDoItem>
          ))}
        </S.ToDoList>
      </S.ToDoBox>
      <S.BtnContainer>
        {!isConfirmed && (
          <>
            {isEditing ? (
              // 수정 중일 때는 수정완료와 확정하기 버튼 표시
              <>
                <S.Btn onClick={handleEditComplete}>수정완료</S.Btn>
                <S.Btn onClick={handleConfirm}>확정하기</S.Btn>
              </>
            ) : (
              // 수정 중이 아닐 때는 수정하기 버튼만 표시
              <S.Btn onClick={() => setIsEditing(true)}>수정하기</S.Btn>
            )}
          </>
        )}
      </S.BtnContainer>
    </S.ToDoListContainer>
  );
};

export default ToDoListComponent;
