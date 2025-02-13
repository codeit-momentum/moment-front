import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface ConsecutiveDaysResponse {
  success: boolean;
  message: string;
  consecutiveDays: number;
}

// API 호출 함수 (date 제거)
const getConsecutiveDays = async (): Promise<ConsecutiveDaysResponse> => {
  const response = await instance.get(`/api/home/consecutiveDays`);
  return response.data;
};

// React Query 훅 (date 파라미터 제거)
const useGetConsecutiveDays = () => {
  return useQuery({
    queryKey: ['ConsecutiveDays'], // 날짜 관련 Key 삭제
    queryFn: getConsecutiveDays, // Query Function 수정
  });
};

export default useGetConsecutiveDays;
