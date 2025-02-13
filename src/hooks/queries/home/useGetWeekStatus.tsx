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

// API 호출 함수
const getWeekStatus = async (): Promise<WeekStatusResponse> => {
  const response = await instance.get(`/api/home/momentsComplete/week`);
  return response.data;
};

// React Query 훅
const useGetWeekStatus = () => {
  return useQuery({
    queryKey: ['WeekStatus'], // Query Key
    queryFn: getWeekStatus, // Query Function
  });
};

export default useGetWeekStatus;
