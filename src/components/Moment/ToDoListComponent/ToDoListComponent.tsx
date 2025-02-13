import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../types/moment/modeType';
import IcLoading from '../../../assets/svg/IcLoading';
import ToDoItem from '../CheckList/CheckListItem/CheckListItem';
import TodoContainer from '../ContainerLayout/ContainerLayout';
import useToast from '../../../hooks/common/useToast';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../Button/Button';
import Toast from '../../common/Toast/Toast';

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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [todos, setTodos] = useState<string[]>(new Array(duration).fill(''));
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();

  useEffect(() => {
    if (mode === 'auto' && Array.isArray(todoList) && todoList.length > 0) {
      setTodos(todoList);
    }
  }, [mode, todoList]);

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

  // 수정 완료 핸들러
  const handleEditComplete = () => {
    setIsEditing(false);
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    if (todos.some((todo) => todo.trim() === '')) {
      openToast('내용을 작성해주세요!');
      return;
    }

    // 전달되는 데이터 콘솔에 출력
    onSave([...todos]); // 상위 컴포넌트로 데이터 전달
    setIsEditing(false);
    setIsConfirmed(true);
  };

  return (
    <S.ToDoListLayout>
      <S.TodoDivider />
      <S.TodoLabel>
        {duration}일 동안 진행할 모멘트는
        <br />
        다음과 같습니다!
      </S.TodoLabel>
      {isLoading ? (
        <S.TodoLoadingWrapper>
          <IcLoading />
        </S.TodoLoadingWrapper>
      ) : (
        <>
          <TodoContainer
            title="방법"
            containerStyle={{ margin: '2rem 0rem', padding: '1rem 2.2rem' }}
            titleStyle={{ fontSize: '16px', padding: '0.5rem 2.4rem' }}
          >
            {todos.map((todo, index) => (
              <ToDoItem
                key={uuidv4()}
                id={index}
                type="생성형"
                state={index + 1}
                value={todo}
                editState={isEditing}
                onUpdateItem={handleEditTodo}
              />
            ))}
          </TodoContainer>

          <S.BtnContainer>
            {mode === 'manual' ? (
              !isConfirmed && <Button onClick={handleConfirm}>확정하기</Button>
            ) : !isConfirmed ? (
              isEditing ? (
                <Button onClick={handleEditComplete}>수정완료</Button>
              ) : (
                <>
                  <Button onClick={handleEditStart}>수정하기</Button>
                  <Button onClick={handleConfirm}>확정하기</Button>
                </>
              )
            ) : null}
          </S.BtnContainer>
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.ToDoListLayout>
  );
};

export default ToDoListComponent;
