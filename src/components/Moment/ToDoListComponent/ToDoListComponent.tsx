import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../types/moment/modeType';
import IcLoading from '../../../assets/svg/IcLoading';
import IcEdit from '../../../assets/svg/IcEdit';
import IcConfirm from '../../../assets/svg/IcConfirm';
import ToDoItem from '../CheckList/CheckListItem/CheckListItem';
import TodoContainer from '../ContainerLayout/ContainerLayout';
import useToast from '../../../hooks/common/useToast';

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
  const [todos, setTodos] = useState<string[]>(new Array(duration).fill('')); // 투두 리스트 상태
  const { Toast, openToast } = useToast();

  useEffect(() => {
    if (mode === 'auto') {
      setTodos(todoList); // 자동 모드에서 API로 가져온 데이터 설정
    }
  }, []);

  // 투두 리스트 변경 핸들러
  const handleEditTodo = (index: number, value: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
  };

  // 수정 시작 핸들러
  const handleEditStart = () => {
    setIsEditing(true);
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    if (todos.some((todo) => todo.trim() === '')) {
      openToast('내용을 작성해주세요!');
      return;
    }

    onSave([...todos]); // 상위 컴포넌트로 데이터 전달
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
        <TodoContainer
          title="방법"
          containerStyle={{ margin: '2rem 0rem', padding: '1rem 2.2rem' }}
          titleStyle={{ fontSize: '16px', padding: '0.5rem 2.4rem' }}
        >
          <S.IconWrapper onClick={isEditing ? handleConfirm : handleEditStart}>
            {isEditing ? <IcConfirm /> : <IcEdit />}
          </S.IconWrapper>
          {todos.map((todo, index) => (
            <ToDoItem
              key={Number(new Date()) + index} //임시 key값
              id={index}
              type="생성형"
              state={index + 1}
              value={todo}
              editState={isEditing}
              onUpdateItem={handleEditTodo}
            />
          ))}
        </TodoContainer>
      )}
      <Toast />
    </S.ToDoListLayout>
  );
};

export default ToDoListComponent;
