import * as S from './CreateMoment.style';
import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import HeaderComponent from '../../../../components/Moment/Create/HeaderComponent/HeaderComponent';
import DurationComponent from '../../../../components/Moment/Create/DurationComponent/DurationComponent';
import ToDoListComponent from '../../../../components/Moment/Create/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../../../components/Moment/Create/FrequencyBtnComponent/FrequencyBtnComponent';
import {
  FrequencyType,
  CreateStateType,
} from '../../../../types/moment/create';
import BtnBack from '../../../../components/buttons/Back/BtnBack';
import { generateMomentDates } from '../../../../utils/generateMomentDates';

const CreateMoment = () => {
  const [duration, setDuration] = useState<number>(0);
  const [todoList, setTodoList] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CreateStateType;

  if (!state || !state.goal || !state.id || !state.mode) {
    alert('페이지 정보를 불러올 수 없습니다. 버킷리스트 페이지로 이동합니다.');
    return <Navigate to="/moment/bucket" replace />;
  }
  const { goal, id: bucketId, mode } = state;

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

  return (
    <S.CreateMomentLayout>
      <BtnBack navigateURL={`/moment/select-mode/${bucketId}`} />
      <HeaderComponent title={goal} subtitle="버킷리스트를 시작해볼까요?" />
      <DurationComponent mode={mode} goal={goal} onEdit={setDuration} />

      {duration && (
        <ToDoListComponent
          goal={goal}
          mode={mode}
          duration={duration}
          onSave={setTodoList}
        />
      )}

      {todoList.length !== 0 && <FrequencyBtnComponent onNext={handleNext} />}
    </S.CreateMomentLayout>
  );
};

export default CreateMoment;
