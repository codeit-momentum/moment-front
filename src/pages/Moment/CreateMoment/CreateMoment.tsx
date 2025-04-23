import * as S from './CreateMoment.style';
import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import CreateMomentHeader from '../../../components/Moment/Create/CreateMomentHeader/CreateMomentHeader';
import MomentDurationSetup from '../../../components/Moment/Create/MomentDurationSetup/MomentDurationSetup';
import MomentPlanSetup from '../../../components/Moment/Create/MomentPlanSetup/MomentPlanSetup';
import MomentFrequencySetup from '../../../components/Moment/Create/MomentFrequencySetup/MomentFrequencySetup';
import { FrequencyType, CreateStateType } from '../../../types/moment/create';
import BtnBack from '../../../components/buttons/Back/BtnBack';
import { generateMomentDates } from '../../../utils/generateMomentDates';

const CreateMoment = () => {
  const [duration, setDuration] = useState<number>(0);
  const [todoList, setTodoList] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CreateStateType;

  if (!state || !state.goal || !state.bucketId || !state.mode) {
    alert('페이지 정보를 불러올 수 없습니다. 버킷리스트 페이지로 이동합니다.');
    return <Navigate to="/moment/bucket" replace />;
  }
  const { goal, bucketId, mode } = state;

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
      <CreateMomentHeader title={goal} subtitle="버킷리스트를 시작해볼까요?" />
      <MomentDurationSetup mode={mode} goal={goal} onEdit={setDuration} />

      {duration > 0 && (
        <MomentPlanSetup
          goal={goal}
          mode={mode}
          duration={duration}
          onSave={setTodoList}
        />
      )}

      {todoList.length !== 0 && <MomentFrequencySetup onNext={handleNext} />}
    </S.CreateMomentLayout>
  );
};

export default CreateMoment;
