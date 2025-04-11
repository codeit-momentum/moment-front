import * as S from './CreateMoment.style';
import { useState, useEffect } from 'react';
import { useNavigationType, useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from '../../../../components/Moment/Create/HeaderComponent/HeaderComponent';
import DurationComponent from '../../../../components/Moment/Create/DurationComponent/DurationComponent';
import ToDoListComponent from '../../../../components/Moment/Create/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../../../components/Moment/Create/FrequencyBtnComponent/FrequencyBtnComponent';
import { ModeType } from '../../../../types/moment/create';
import BtnBack from '../../../../components/buttons/Back/BtnBack';
import { CreateMomentResponse } from '../../../../types/moment/create';
import useMomentData from '../../../../hooks/moment/useMomentData';
import Fallback from '../../../Fallback/Fallback';

interface LocationState {
  goal: string;
  mode: ModeType;
  id: string;
}

const CreateMoment = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const { momentData, saveMomentData } = useMomentData(
    sessionStorage.getItem('bucketId') || '',
  );

  const [duration, setDuration] = useState<number>(momentData?.duration || 0);
  const [todoList, setTodoList] = useState<string[]>(
    momentData?.todoList || [],
  );
  const [frequency, setFrequency] = useState<string | null>(
    momentData?.frequency || null,
  );
  const [isDurationConfirmed, setIsDurationConfirmed] = useState(
    !!momentData?.duration,
  );
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(
    !!momentData?.todoList?.length,
  );

  const state = location.state as LocationState;

  useEffect(() => {
    if (!state || !state?.goal || !state.id || !state.mode) {
      alert('location state 없음');
      navigate('/moment/bucket', { replace: true });
    }
  }, [state, navigate]);

  // 렌더링 중 상태 반환
  if (!state) {
    return <Fallback />;
  }

  const { goal, id: bucketId, mode } = state;

  // 사용자가 duration을 확정한 후에 `todoList` API 호출
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);
  };

  const handleTodoConfirm = (updatedList: string[]) => {
    setTodoList(updatedList);
    setIsTodoConfirmed(true);
  };

  const handleNext = () => {
    if (!frequency || !duration || todoList.length === 0) {
      alert('빈도, 기간, 투두리스트를 입력해주세요.');
      return;
    }

    const momentData: CreateMomentResponse = {
      id: bucketId,
      duration,
      todoList,
      frequency,
      createdAt: new Date().toISOString(),
    };

    saveMomentData(momentData);

    const savedData = localStorage.getItem(`momentConfig-${bucketId}`);
    if (!savedData) {
      console.error('localStorage 저장 확인 실패! 데이터가 없습니다.');
      alert('세션 데이터 저장에 실패했습니다. 다시 시도해주세요.');
      return;
    }

    console.log('sessionStorage 데이터 저장 확인 완료, 페이지 이동');
    navigate('/moment/complete', {
      state: { ...momentData, bucketId },
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

      {isTodoConfirmed && (
        <FrequencyBtnComponent
          onSelect={setFrequency} // 상태 저장
          onNext={handleNext}
        />
      )}
    </S.CreateMomentLayout>
  );
};

export default CreateMoment;
