import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface TodayMomentsResponse {
  success: boolean;
  messages: string;
  user: string;
  moments: {
    momentID: string;
    content: string;
    isCompleted: boolean;
  }[];
  completedCount: number;
}

const getTodayMoments = async (): Promise<TodayMomentsResponse> => {
  const response = await instance.get(`/api/home`);
  return response.data;
};

const useGetTodayMoments = () => {
  return useSuspenseQuery({
    queryKey: ['todayMoments'],
    queryFn: getTodayMoments,
  });
};

export default useGetTodayMoments;
