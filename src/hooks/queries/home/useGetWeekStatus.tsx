import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface WeekStatusResponse {
  success: boolean;
  message: string;
  startDate: string;
  endDate: string;
  weekStatus: {
    date: string;
    isComplete: boolean;
  }[];
}

// API 호출 함수 (date 제거)
const getWeekStatus = async (): Promise<WeekStatusResponse> => {
  const response = await instance.get(`/api/home/momentsComplete/week`);
  return response.data;
};

// React Query 훅 (date 파라미터 제거)
const useGetWeekStatus = () => {
  return useQuery({
    queryKey: ['WeekStatus'], // 날짜 관련 Key 삭제
    queryFn: getWeekStatus, // Query Function 수정
  });
};

export default useGetWeekStatus;
