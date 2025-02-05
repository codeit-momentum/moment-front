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
import { createMoment } from '../../apis/createMomentApi';

/**
 * Moment
 * - 자동/수동 모드에 따라 동작하며, 컴포넌트를 순차적으로 렌더링
 * - 스크롤 뷰 형태로 구성
 */
const CreateMoment = () => {
  // 상태 관리
  const [goal, setGoal] = useState<string>('로딩 중...');
  const [duration, setDuration] = useState<number | null>(null); // 예상 소요 기간
  const [todoList, setTodoList] = useState<string[]>([]); // 투두리스트 데이터
  const [frequency, setFrequency] = useState<string | null>(null); // 빈도수 데이터

  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false); // Duration 확정 여부
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false); // ToDoList 확정 여부

  // API 요청 및 상태 관리 (useApi 훅 사용)
  const { id } = useParams() as { id: string }; //URL에서 id 가져오기
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const mode = query.get('mode') as ModeType; // auto 또는 manaul
  const [isModeValid, setIsModeValid] = useState(true); // 모드 유효성 검사 상태 추가

  if (!isModeValid) {
    return <div>올바른 모드를 선택해주세요.</div>;
  }
  // id를 이용해 goal(버킷리스트 제목) 가져오기
  useEffect(() => {
    instance
      .get(`/api/bucket/${id}`)
      .then((res) => {
        console.log('API 응답:', res.data);
        setGoal(res.data.bucket.content || '목표 없음');
      })
      .catch(() => setGoal('목표 없음'));
  }, [id]);

  useEffect(() => {
    // mode 유효성 검사
    if (!mode || (mode !== 'auto' && mode !== 'manual')) {
      setIsModeValid(false);
    } else {
      setIsModeValid(true);
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
          console.log('상태 업데이트 후 duration:', days);
        })
        .catch((error) => {
          console.error('자동 생성 오류:', error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [mode, goal]);

  // 사용자가 duration을 확정한 후에 `todoList` API 호출
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);

    console.log('확정된 duration:', newDuration);
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
  // BackBtn 기능 안함,, 추후 리팩토링할 예정
  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate(`/moment/select-mode/${id}`); // POP 상태에서는 지정된 경로로 이동
    } else {
      navigate(-1); // 다른 상태에서는 이전 페이지로 이동
    }
  };

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
