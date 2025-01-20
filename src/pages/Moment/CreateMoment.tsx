import * as S from './Moment.style';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import DurationComponent from '../../components/Moment/DurationComponent/DurationComponent';
import LoadingSpinner from '../../components/Moment/LoadingSpinner/LoadingSpinner';
import ToDoListComponent from '../../components/Moment/ToDoListComponent/ToDoListComponent';
import FrequencyBtnComponent from '../../components/Moment/FrequencyBtnComponent/FrequencyBtnComponent';
import { useApi } from '../../hooks/useApi';

/**
 * Moment
 * - 자동/수동 모드에 따라 동작하며, 컴포넌트를 순차적으로 렌더링
 * - 스크롤 뷰 형태로 구성
 */
const CreateMoment = () => {
  // 상태 관리
  const [duration, setDuration] = useState<number | null>(null); // 예상 소요 기간
  const [todoList, setTodoList] = useState<string[]>([]); // 투두리스트 데이터
  const [isDurationConfirmed, setIsDurationConfirmed] = useState(false); // Duration 확정 여부
  const [isTodoConfirmed, setIsTodoConfirmed] = useState(false); // ToDoList 확정 여부

  // API 요청 및 상태 관리 (useApi 훅 사용)
  const { isLoading, data, fetchData } = useApi();
  // 페이지 이동을 위한 useNavigate
  const navigate = useNavigate();
  const location = useLocation(); //Query String을 읽기 위한 useLocation
  const query = new URLSearchParams(location.search);
  const mode = query.get('mode') as 'auto' | 'manual'; // Query String에서 mode 추출

  /**
   * mode 값 유효성 검증
   * - mode 값이 없거나 유효하지 않은 경우 오류 메시지 표시
   */
  if (!mode || (mode !== 'auto' && mode !== 'manual')) {
    return <div>올바른 모드를 선택해주세요.</div>;
  }

  /**
   * 자동 모드일 경우 API 호출 시뮬레이션 시작
   */
  useEffect(() => {
    if (mode === 'auto') {
      fetchData(); // 목데이터 가져오기
    }
  }, [mode, fetchData]);

  /**
   * API 데이터 수신 시 상태 업데이트
   * - duration: 예상 소요 기간
   * - todoList: 투두리스트 데이터
   */
  useEffect(() => {
    if (mode === 'auto' && data) {
      setDuration(data.duration);
      setTodoList(data.todoList);
    }
  }, [mode, data]);

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
   * - MomentComplete 페이지로 이동
   */
  const handleNext = () => {
    navigate('/moment-complete');
    console.log('Move to MomentComplete Page');
  };

  return (
    <S.MomentLayout>
      {/* HeaderComponent: 항상 렌더링 */}
      <HeaderComponent
        title="목도리 뜨기"
        subtitle="버킷리스트를 시작해볼까요!"
      />

      {/* 자동 모드에서 로딩 중일 경우 LoadingSpinner 표시 */}
      {mode === 'auto' && isLoading && <LoadingSpinner />}

      {/* 로딩이 끝난 경우 다른 컴포넌트 순차적으로 렌더링 */}
      {!isLoading && (
        <>
          {/* DurationComponent: 예상 소요 기간 입력 */}
          <DurationComponent
            mode={mode}
            initialDuration={duration}
            onEdit={handleDurationConfirm}
          />

          {/* ToDoListComponent: Duration 확정 후 렌더링 */}
          {isDurationConfirmed && (
            <ToDoListComponent
              mode={mode}
              todoList={todoList}
              duration={duration || 0}
              isLoading={isLoading}
              onSave={handleTodoConfirm}
            />
          )}

          {/* FrequencyBtnComponent: ToDoList 확정 후 렌더링 */}
          {isTodoConfirmed && (
            <FrequencyBtnComponent
              onSelect={(selected) => console.log(selected)} // Frequency 선택 로그
              onNext={handleNext} // "다음" 버튼 클릭 시 호출
            />
          )}
        </>
      )}
    </S.MomentLayout>
  );
};

export default CreateMoment;
