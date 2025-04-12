import * as S from './CreateMoment.style';
import { useState } from 'react';
import {
  useNavigationType,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import HeaderComponent from '../../../../components/Moment/Create/HeaderComponent/HeaderComponent';
import DurationComponent from '../../../../components/Moment/Create/DurationComponent/DurationComponent';
import ToDoListComponent from '../../../../components/Moment/Create/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../../../components/Moment/Create/FrequencyBtnComponent/FrequencyBtnComponent';
import {
  FrequencyType,
  LocationStateType,
} from '../../../../types/moment/create';
import BtnBack from '../../../../components/buttons/Back/BtnBack';
import { generateMomentDates } from '../../../../utils/generateMomentDates';

const CreateMoment = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const state = location.state as LocationStateType;

  const [duration, setDuration] = useState<number>(0);
  const [todoList, setTodoList] = useState<string[]>([]);
  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false);
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false);

  if (!state || !state.goal || !state.id || !state.mode) {
    alert('location state 없음');
    return <Navigate to="/moment/bucket" replace />;
  }

  const { goal, id: bucketId, mode } = state;

  // 사용자 duration 확정
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);
  };

  const handleTodoConfirm = (updatedList: string[]) => {
    setTodoList(updatedList);
    setIsTodoConfirmed(true);
  };

  const handleNext = (frequency: FrequencyType) => {
    if (!frequency || !duration || todoList.length === 0) {
      alert('빈도, 기간, 투두리스트를 입력해주세요.');
      return;
    }
    const moments = generateMomentDates({ duration, frequency, todoList });

    navigate('/moment/complete', {
      state: { bucketId, moments, frequency },
      replace: true,
    });
  };
  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate(`/moment/select-mode/${bucketId}`);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.CreateMomentLayout>
      <BtnBack onClick={handleBack} />
      <HeaderComponent title={goal} subtitle="버킷리스트를 시작해볼까요?" />
      <DurationComponent
        mode={mode}
        goal={goal}
        onEdit={handleDurationConfirm}
      />

      {isDurationConfirmed && (
        <ToDoListComponent
          goal={goal}
          mode={mode}
          duration={duration}
          onSave={handleTodoConfirm}
        />
      )}

      {isTodoConfirmed && <FrequencyBtnComponent onNext={handleNext} />}
    </S.CreateMomentLayout>
  );
};

export default CreateMoment;
