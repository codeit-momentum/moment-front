import { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { ModeType } from '../../../../types/moment/create';
import IcLoading from '../../../../assets/svg/common/IcLoading';
import ToDoItem from '../../CheckList/CheckListItem/CheckListItem';
import TodoContainer from '../../ContainerLayout/ContainerLayout';
import useToast from '../../../../hooks/common/useToast';
import { v4 as uuidv4 } from 'uuid';
import Toast from '../../../common/Toast/Toast';
import Divider from '../../../common/Divider/Divider';
import { generateDetailedPlan } from '../../../../apis/AI/autoPlanning';
import EditConfirmButtons from '../EditConfirmButtons/EditConfirmButtons';

interface ToDoListProps {
  goal: string;
  mode: ModeType;
  duration: number;
  onSave: (todoList: string[]) => void;
}

const ToDoListComponent = ({ goal, mode, duration, onSave }: ToDoListProps) => {
  const [isEditing, setIsEditing] = useState(mode === 'manual'); // 수정 상태
  const [isLoadingAI, setIsLoadingAI] = useState(mode === 'auto');
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

  const handleEditTodo = (index: number, value: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
  };

  const handleConfirmTodo = () => {
    if (todos.some((todo) => todo.trim() === '')) {
      openToast('내용을 작성해주세요!');
      return false;
    }

    onSave([...todos]);
    return true;
  };

  return (
    <S.ToDoListLayout>
      <Divider />
      <S.ToDoListTitle>
        {duration}일 동안 진행할 모멘트는
        <br />
        다음과 같습니다!
      </S.ToDoListTitle>
      {isLoadingAI ? (
        <S.ToDoListLoadingWrapper>
          <IcLoading />
        </S.ToDoListLoadingWrapper>
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
          <EditConfirmButtons
            mode={mode}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onConfirm={handleConfirmTodo}
          />
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.ToDoListLayout>
  );
};

export default ToDoListComponent;
