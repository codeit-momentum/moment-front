import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface ConsecutiveDaysResponse {
  success: boolean;
  message: string;
  consecutiveDays: number;
}

// API 호출 함수
const getConsecutiveDays = async (): Promise<ConsecutiveDaysResponse> => {
  const response = await instance.get(`/api/home/consecutiveDays`);
  return response.data;
};

// React Query 훅
const useGetConsecutiveDays = () => {
  return useQuery({
    queryKey: ['ConsecutiveDays'], // Query Key
    queryFn: getConsecutiveDays, // Query Function
  });
};

export default useGetConsecutiveDays;
