import { useQuery } from '@tanstack/react-query';
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

// API 호출 함수
const getTodayMoments = async (): Promise<TodayMomentsResponse> => {
  const response = await instance.get(`/api/home`);
  return response.data;
};

// React Query 훅

const useGetTodayMoments = () => {
  return useQuery({
    queryKey: ['TodayMoments'],
    queryFn: getTodayMoments,
  });
};

export default useGetTodayMoments;
