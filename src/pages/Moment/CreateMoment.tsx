import * as S from './CreateMoment.style';
import { useState, useEffect } from 'react';
import { useNavigationType, useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import DurationComponent from '../../components/Moment/DurationComponent/DurationComponent';
import ToDoListComponent from '../../components/Moment/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../components/Moment/FrequencyBtnComponent/FrequencyBtnComponent';
import { autoDuration } from '../../apis/AI/autoDuration';
import { ModeType } from '../../types/moment/modeType';
import BackBtn from '../../components/BackBtn/BackBtn';
import { generateDetailedPlan } from '../../apis/AI/autoPlanning';
import { CreateMomentResponse } from '../../types/moment/createMomentTypes';
import useBucketId from '../../hooks/useBucketId';
import useGetBucketDetail from '../../hooks/queries/bucketList/useGetBucketDetail';
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
  const mode =
    (location.state?.mode as ModeType) || (query.get('mode') as ModeType);
  const bucketId = useBucketId();

  const { data, isLoading } = useGetBucketDetail(bucketId);
  const bucketContent = data?.bucket?.content || '버킷리스트 없음';

  useEffect(() => {
    console.log('CreateMoment.tsx - 현재 버킷 ID:', bucketId);
  }, [bucketId]);

  useEffect(() => {
    if (bucketContent === '버킷리스트 없음') {
      console.error('목표 없음으로 모멘트 생성 불가');
      navigate(`/moment/select-mode/${bucketId}`, { replace: true });
    }
  }, [bucketContent, navigate, bucketId]);

  const [duration, setDuration] = useState<number | null>(null);
  const [todoList, setTodoList] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string | null>(null);
  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false);
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isModeValid, setIsModeValid] = useState(true);

  // sessionStorage에서 기존 데이터 불러오기
  useEffect(() => {
    const storedMomentData = sessionStorage.getItem(`momentData-${bucketId}`);

    if (storedMomentData) {
      try {
        const parsedData = JSON.parse(storedMomentData);
        console.log('CreateMoment.tsx - sessionStorage 복구:', parsedData);

        if (!parsedData?.todoList || parsedData.todoList.length === 0) {
          console.warn(
            '세션 데이터가 있지만 todoList가 비어 있음. 초기화 진행',
          );
          sessionStorage.removeItem(`momentData-${bucketId}`);
        } else {
          setDuration(parsedData.duration);
          setTodoList(parsedData.todoList);
          setFrequency(parsedData.frequency);
        }
      } catch (error) {
        console.error('세션 데이터 파싱 오류:', error);
        sessionStorage.removeItem(`momentData-${bucketId}`);
      }
    }
  }, [bucketId]);

  useEffect(() => {
    if (!mode || (mode !== 'auto' && mode !== 'manual')) {
      setIsModeValid(false);
    }
  }, [mode]);

  // 자동 모드일 경우 AI API 호출
  useEffect(() => {
    if (mode === 'auto') {
      setIsLoadingAI(true);

      autoDuration(bucketContent)
        .then((days) => {
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
        .finally(() => setIsLoadingAI(false));
    }
  }, [mode, bucketContent]);

  // 사용자가 duration을 확정한 후에 `todoList` API 호출
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);
    setIsLoadingAI(true);

    generateDetailedPlan(
      bucketContent,
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
      .finally(() => setIsLoadingAI(false));
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
      id: bucketId, // 버킷 ID 유지
      duration,
      todoList,
      frequency,
      createdAt: new Date().toISOString(),
    };

    console.log(
      `CreateMoment - sessionStorage 저장 (버킷 ID: ${bucketId}):`,
      momentData,
    );
    sessionStorage.setItem(
      `momentData-${bucketId}`,
      JSON.stringify(momentData),
    );

    navigate('/moment/complete', { state: { ...momentData, bucketId } });
  };

  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate(`/moment/select-mode/${bucketId}`);
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
      <HeaderComponent
        title={isLoading ? '로딩 중...' : bucketContent}
        subtitle="버킷리스트를 시작해볼까요!"
      />

      <DurationComponent
        mode={mode}
        initialDuration={duration}
        isLoading={!isDurationConfirmed && isLoadingAI}
        onEdit={handleDurationConfirm}
      />

      {isDurationConfirmed && (
        <ToDoListComponent
          mode={mode}
          todoList={todoList}
          duration={duration || 0}
          isLoading={!isTodoConfirmed && isLoadingAI}
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
