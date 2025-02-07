import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface ConsecutiveDaysResponse {
  success: boolean;
  message: string;
  consecutiveDays: number;
}

// API 호출 함수
const getConsecutiveDays = async (
  date: string,
): Promise<ConsecutiveDaysResponse> => {
  const response = await instance.get('/api/home/consecutiveDays', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    params: { date },
  });
  return response.data;
};

// React Query 훅
const useGetConsecutiveDays = (date: string) => {
  return useQuery({
    queryKey: ['ConsecutiveDays', date], // Query Key
    queryFn: () => getConsecutiveDays(date), // Query Function
    enabled: !!date, // date가 존재할 때만 실행
  });
};

export default useGetConsecutiveDays;
