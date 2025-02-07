import * as S from './CreateMoment.style';
import { useState, useEffect } from 'react';
import {
  useNavigationType,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import DurationComponent from '../../components/Moment/DurationComponent/DurationComponent';
import ToDoListComponent from '../../components/Moment/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../components/Moment/FrequencyBtnComponent/FrequencyBtnComponent';
import { autoDuration } from '../../apis/AI/autoDuration';
import { ModeType } from '../../types/moment/modeType';
import BackBtn from '../../components/BackBtn/BackBtn';
import { generateDetailedPlan } from '../../apis/AI/autoPlanning';
import instance from '../../apis/client';

/**
 * Moment
 * - 자동/수동 모드에 따라 동작하며, 컴포넌트를 순차적으로 렌더링
 * - 스크롤 뷰 형태로 구성
 */
const CreateMoment = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const mode = query.get('mode') as ModeType;
  const { id } = useParams() as { id: string };

  // `goal`을 `SelectMode`에서 전달받음 (API 호출 제거)
  const goal = location.state?.goal || '목표 없음';

  const [duration, setDuration] = useState<number | null>(null);
  const [todoList, setTodoList] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string | null>(null);
  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false);
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModeValid, setIsModeValid] = useState(true);

  // `goal`이 `"목표 없음"`이면 리다이렉트
  useEffect(() => {
    if (goal === '목표 없음') {
      console.error('목표 없음으로 모멘트 생성 불가');
      navigate(`/moment/select-mode/${id}`, { replace: true });
      return;
    }
  }, [goal, navigate, id]);

  useEffect(() => {
    if (!mode || (mode !== 'auto' && mode !== 'manual')) {
      setIsModeValid(false);
    }
  }, [mode]);

  // 자동 모드일 경우 AI API 호출
  useEffect(() => {
    if (mode === 'auto') {
      setIsLoading(true);

      autoDuration(goal)
        .then((days) => {
          console.log('AI 예상 소요 기간:', days);

          if (!days || isNaN(days)) {
            throw new Error('AI가 예상 소요 기간을 반환하지 않았습니다.');
          }

          setDuration(days); // AI에서 받은 duration을 먼저 설정
        })
        .catch((error) => {
          console.error('자동 생성 오류:', error);
          alert(
            'AI 예상 소요 기간 생성 중 오류가 발생했습니다. 다시 시도해주세요.',
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [mode, goal]);

  // 사용자가 duration을 확정한 후에 `todoList` API 호출
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);
    setIsLoading(true);

    generateDetailedPlan(
      goal,
      new Date().toISOString().split('T')[0],
      newDuration,
    )
      .then((plan) => {
        console.log('생성된 투두 리스트:', plan);
        setTodoList(plan);
      })
      .catch((error) => {
        console.error('자동 생성 오류:', error);
        alert('투두 리스트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      })
      .finally(() => setIsLoading(false));
  };

  const handleTodoConfirm = (updatedList: string[]) => {
    setTodoList(updatedList);
    setIsTodoConfirmed(true);
  };

  const handleNext = async () => {
    if (!frequency) {
      alert('빈도를 선택해주세요!');
      return;
    }

    const payload = {
      goal,
      duration,
      todoList,
      frequency,
    };

    try {
      await instance.post('/api/moment/create', payload);
      alert('Moment가 성공적으로 저장되었습니다.');
      navigate('/moment/complete'); // 다음 페이지 이동
    } catch (error) {
      console.error('Moment 저장 실패:', error);
      alert('Moment 저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate(`/moment/select-mode/${id}`);
    } else {
      navigate(-1);
    }
  };

  if (!isModeValid) {
    return <div>올바른 모드를 선택해주세요.</div>;
  }

  return (
    <S.CreateMomentLayout>
      <BackBtn onClick={handleBack} />
      <HeaderComponent title={goal} subtitle="버킷리스트를 시작해볼까요!" />

      <DurationComponent
        mode={mode}
        initialDuration={duration}
        isLoading={!isDurationConfirmed && isLoading}
        onEdit={handleDurationConfirm}
      />

      {isDurationConfirmed && (
        <ToDoListComponent
          mode={mode}
          todoList={todoList}
          duration={duration || 0}
          isLoading={!isTodoConfirmed && isLoading}
          onSave={handleTodoConfirm}
        />
      )}

      {isTodoConfirmed && (
        <FrequencyBtnComponent
          onSelect={(selected) => setFrequency(selected)} // 상태 저장
          onNext={handleNext}
        />
      )}
    </S.CreateMomentLayout>
  );
};

export default CreateMoment;
