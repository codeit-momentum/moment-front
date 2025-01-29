import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../types/moment/modeType';
import IcLoading from '../../../assets/svg/IcLoading';
import IcEdit from '../../../assets/svg/IcEdit';
import IcConfirm from '../../../assets/svg/IcConfirm';

/**
 * ToDoListProps 인터페이스
 */
interface ToDoListProps {
  mode: ModeType; // 'auto' 또는 'manual'
  todoList: string[]; // API에서 받아오는 todo 리스트
  duration: number; // Duration 값
  isLoading: boolean; // 로딩 상태
  onSave: (todoList: string[]) => void; // 상위 컴포넌트로 전달
}

const ToDoListComponent = ({
  mode,
  duration,
  todoList,
  isLoading,
  onSave,
}: ToDoListProps) => {
  // 편집 모드 상태 관리: 수동 모드일 경우 초기값 true
  const [isEditing, setIsEditing] = useState(mode === 'manual'); // 수정 상태
  const [isConfirmed, setIsConfirmed] = useState(false); //확정상태 관리
  const [todos, setTodos] = useState<string[]>([]); // 투두 리스트 상태
  const [newTodo, setNewTodo] = useState<string>(''); // 새로운 입력값 상태

  useEffect(() => {
    if (mode === 'manual') {
      if (isEditing) {
        // 편집 모드일 때 기존 데이터를 유지
        setTodos((prevTodos) => (prevTodos.length > 0 ? prevTodos : []));
      }
    } else if (mode === 'auto' && !isEditing) {
      setTodos(todoList); // 자동 모드에서 API로 가져온 데이터 설정
    }
  }, [mode, todoList, duration, isEditing, isConfirmed]);

  // 투두 리스트 변경 핸들러
  const handleEditTodo = (index: number, value: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
  };

  // 수정 시작 핸들러
  const handleEditStart = () => {
    setIsEditing(true);
    setIsConfirmed(false);
  };

  // 새로운 항목 추가 핸들러
  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      newTodo.trim() !== '' &&
      todos.length < duration
    ) {
      setTodos([newTodo, ...todos]); // 새로운 항목을 상단에 추가
      setNewTodo(''); // 입력 필드 초기화
      event.preventDefault(); // Enter 키 입력 시 줄바꿈 방지
    }
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    if (todos.some((todo) => todo.trim() === '') || todos.length < duration) {
      alert(`모든 항목을 입력해주세요. (${todos.length}/${duration})`);
      return;
    }

    onSave([...todos]); // 상위 컴포넌트로 데이터 전달
    setIsConfirmed(true);
    setIsEditing(false);
  };

  return (
    <S.ToDoListLayout>
      <S.TodoDivider />
      <S.TodoLabel>
        {duration}일 동안 진행할 모멘트는 다음과 같습니다!
      </S.TodoLabel>
      {isLoading ? (
        <S.TodoLoadingWrapper>
          <IcLoading />
        </S.TodoLoadingWrapper>
      ) : (
        <>
          <S.TodoContainer>
            <S.TodoHeaderContainer>
              <S.TodoHeader>방법</S.TodoHeader>
              <S.IconWrapper
                onClick={isEditing ? handleConfirm : handleEditStart}
              >
                {isEditing ? <IcConfirm /> : <IcEdit />}
              </S.IconWrapper>
            </S.TodoHeaderContainer>
            <S.ListItemWrapper>
              {isEditing && mode === 'manual' && (
                <S.ToDoItem>
                  <S.CheckBox />
                  <S.ListItemInput
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleAddTodo}
                    placeholder="할 일을 입력하세요"
                  />
                </S.ToDoItem>
              )}
              {todos.map((todo, index) => (
                <S.ToDoItem key={index}>
                  <S.TodoIndex>{index + 1}</S.TodoIndex>
                  {isEditing || !isConfirmed ? (
                    <S.ListItemInput
                      type="text"
                      value={todo}
                      onChange={(e) => handleEditTodo(index, e.target.value)}
                    />
                  ) : (
                    <S.ListDisplay>{todo}</S.ListDisplay>
                  )}
                </S.ToDoItem>
              ))}
            </S.ListItemWrapper>
          </S.TodoContainer>
        </>
      )}
    </S.ToDoListLayout>
  );
};

export default ToDoListComponent;
