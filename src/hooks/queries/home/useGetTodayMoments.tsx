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

// API 호출 함수 (date 제거)
const getTodayMoments = async (): Promise<TodayMomentsResponse> => {
  const response = await instance.get(`/api/home`);
  return response.data;
};

// React Query 훅 (date 파라미터 제거)
const useGetTodayMoments = () => {
  return useQuery({
    queryKey: ['TodayMoments'], // 날짜 관련 Key 삭제
    queryFn: getTodayMoments, // Query Function 수정
  });
};

export default useGetTodayMoments;
