import * as S from './CreateMoment.style';
import { useState, useEffect } from 'react';
import { useNavigationType, useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import DurationComponent from '../../components/Moment/DurationComponent/DurationComponent';
import ToDoListComponent from '../../components/Moment/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../components/Moment/FrequencyBtnComponent/FrequencyBtnComponent';
import {
  fetchMockData,
  fetchTodoListFromAI,
  TodoResponse,
} from '../../apis/mockApi';
import { ModeType } from '../../types/moment/modeType';
import BackBtn from '../../components/BackBtn/BackBtn';
import { createMoment } from '../../apis/createMomentApi';

/**
 * Moment
 * - 자동/수동 모드에 따라 동작하며, 컴포넌트를 순차적으로 렌더링
 * - 스크롤 뷰 형태로 구성
 */
const CreateMoment = () => {
  // 상태 관리
  const [duration, setDuration] = useState<number | null>(null); // 예상 소요 기간
  const [todoList, setTodoList] = useState<string[]>([]); // 투두리스트 데이터
  const [frequency, setFrequency] = useState<string | null>(null); // 빈도수 데이터

  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false); // Duration 확정 여부
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false); // ToDoList 확정 여부

  // API 요청 및 상태 관리 (useApi 훅 사용)
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

  useEffect(() => {
    // mode 유효성 검사
    if (!mode || (mode !== 'auto' && mode !== 'manual')) {
      setIsModeValid(false);
    } else {
      setIsModeValid(true);
    }
  }, [mode]);

  // Mock API 사용 - 자동 모드일 경우
  useEffect(() => {
    if (mode === 'auto') {
      setIsLoading(true);
      fetchMockData() // 실제 API로 전환 시 fetchTodoListFromAI 호출
        .then((data: TodoResponse) => {
          setDuration(data.duration);
          setTodoList(data.todoList);
        })
        .finally(() => setIsLoading(false));
    }
  }, [mode]);

  /**
   * Duration 확정 핸들러
   * - 사용자가 DurationComponent에서 확정 버튼을 누를 때 호출
   * - 확정된 기간을 상태로 저장하고 다음 컴포넌트를 표시
   */
  const handleDurationConfirm = (newDuration: number) => {
    setDuration(newDuration);
    setIsDurationConfirmed(true);
  };

  /**
   * ToDoList 확정 핸들러
   * - 사용자가 ToDoListComponent에서 확정 버튼을 누를 때 호출
   * - 확정된 투두리스트 데이터를 상태로 저장하고 다음 컴포넌트를 표시
   */
  const handleTodoConfirm = (updatedList: string[]) => {
    setTodoList(updatedList);
    setIsTodoConfirmed(true);
  };

  /**
   * Frequency "다음" 버튼 핸들러
   * - 사용자가 FrequencyBtnComponent에서 "다음" 버튼을 누를 때 호출
   * - 백엔드로 데이터 전달
   * - MomentComplete 페이지로 이동
   */
  const handleNext = async () => {
    if (!frequency) {
      alert('빈도를 선택해주세요!');
      return;
    }

    const payload = {
      duration,
      todoList,
      frequency,
    };

    try {
      // API 호출 부분을 주석 처리
      // const response = await createMoment(payload);
      // console.log('Moment 저장 성공:', response);

      alert('Moment가 임시로 저장되었습니다.'); // 임시 알림
      navigate('/moment/complete'); // 다음 페이지로 이동
    } catch (error) {
      console.error('Moment 저장 실패:', error);
      alert('Moment 저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
  // BackBtn 기능 안함,, 추후 리팩토링할 예정
  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate('/moment/select-mode'); // POP 상태에서는 지정된 경로로 이동
    } else {
      navigate(-1); // 다른 상태에서는 이전 페이지로 이동
    }
  };

  return (
    <S.CreateMomentLayout>
      <BackBtn onClick={handleBack} />
      <HeaderComponent
        title="목도리 뜨기"
        subtitle="버킷리스트를 시작해볼까요!"
      />

      <DurationComponent
        mode={mode}
        initialDuration={duration}
        isLoading={isLoading}
        onEdit={handleDurationConfirm}
      />

      {isDurationConfirmed && (
        <ToDoListComponent
          mode={mode}
          todoList={todoList}
          duration={duration || 0}
          isLoading={isLoading}
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
