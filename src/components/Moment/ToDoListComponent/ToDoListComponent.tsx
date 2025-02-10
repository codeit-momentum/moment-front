import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../types/moment/modeType';
import IcLoading from '../../../assets/svg/IcLoading';
import IcEdit from '../../../assets/svg/IcEdit';
import IcConfirm from '../../../assets/svg/IcConfirm';
import ToDoItem from '../CheckList/CheckListItem/CheckListItem';
import TodoContainer from '../ContainerLayout/ContainerLayout';
import useToast from '../../../hooks/common/useToast';
import { v4 as uuidv4 } from 'uuid';

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
  const [todos, setTodos] = useState<{ id: string; value: string }[]>(
    new Array(duration).fill('').map(() => ({ id: uuidv4(), value: '' })),
  );
  const { Toast, openToast } = useToast();

  useEffect(() => {
    if (mode === 'auto' && Array.isArray(todoList) && todoList.length > 0) {
      setTodos(todoList.map((todo) => ({ id: uuidv4(), value: todo })));
    }
  }, [mode, todoList]);

  // 투두 리스트 변경 핸들러
  const handleEditTodo = (index: number, value: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { id: todo.id, value } : todo)),
    );
  };

  // 수정 시작 핸들러
  const handleEditStart = () => {
    setIsEditing(true);
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    if (todos.some((todo) => todo.value.trim() === '')) {
      openToast('내용을 작성해주세요!');
      return;
    }

    // 전달되는 데이터 콘솔에 출력
    const updatedTodoList = todos.map((todo) => todo.value);
    console.log('onSave로 전달되는 데이터:', updatedTodoList);

    onSave(updatedTodoList); // 상위 컴포넌트로 데이터 전달
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
              key={todo.id}
              id={index}
              type="생성형"
              state={index + 1}
              value={todo.value}
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
