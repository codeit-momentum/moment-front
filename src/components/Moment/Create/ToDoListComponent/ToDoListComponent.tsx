import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../../types/moment/create';
import IcLoading from '../../../../assets/svg/common/IcLoading';
import ToDoItem from '../../CheckList/CheckListItem/CheckListItem';
import TodoContainer from '../../ContainerLayout/ContainerLayout';
import useToast from '../../../../hooks/common/useToast';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../buttons/Button';
import Toast from '../../../common/Toast/Toast';
import Divider from '../../../common/Divider/Divider';
import { generateDetailedPlan } from '../../../../apis/AI/autoPlanning';
/**
 * ToDoListProps 인터페이스
 */
interface ToDoListProps {
  goal: string;
  mode: ModeType; // 'auto' 또는 'manual'
  duration: number; // Duration 값
  onSave: (todoList: string[]) => void; // 상위 컴포넌트로 전달
}

const ToDoListComponent = ({ goal, mode, duration, onSave }: ToDoListProps) => {
  // 편집 모드 상태 관리: 수동 모드일 경우 초기값 true
  const [isEditing, setIsEditing] = useState(mode === 'manual'); // 수정 상태
  const [isLoadingAI, setIsLoadingAI] = useState(mode === 'auto');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [todos, setTodos] = useState<string[]>([]);
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();

  useEffect(() => {
    const getGeneratedPlan = async () => {
      setIsLoadingAI(true);
      try {
        const plan = await generateDetailedPlan(
          goal,
          new Date().toISOString().split('T')[0],
          duration,
        );
        setTodos(plan);
      } catch (error) {
        console.error(error);
        alert('투두 리스트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setIsLoadingAI(false);
      }
    };

    if (mode === 'auto') {
      getGeneratedPlan();
    } else {
      setTodos(new Array(duration).fill(''));
    }
  }, [goal, mode, duration]);

  // 투두 리스트 변경 핸들러
  const handleEditTodo = (index: number, value: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
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

  const renderButtons = () => {
    if (isConfirmed) return null;

    if (mode === 'manual') {
      return <Button onClick={handleConfirm}>확정하기</Button>;
    }

    // mode === 'auto'
    return isEditing ? (
      <Button onClick={() => setIsEditing(false)}>수정완료</Button>
    ) : (
      <>
        <Button onClick={() => setIsEditing(true)}>수정하기</Button>
        <Button onClick={handleConfirm}>확정하기</Button>
      </>
    );
  };

  return (
    <S.ToDoListLayout>
      <Divider />
      <S.TodoLabel>
        {duration}일 동안 진행할 모멘트는
        <br />
        다음과 같습니다!
      </S.TodoLabel>
      {isLoadingAI ? (
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
          <S.BtnContainer>{renderButtons()}</S.BtnContainer>
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.ToDoListLayout>
  );
};

export default ToDoListComponent;
