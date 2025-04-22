import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
interface ConsecutiveDaysResponse {
  success: boolean;
  message: string;
  consecutiveDays: number;
}

const getConsecutiveDays = async (): Promise<ConsecutiveDaysResponse> => {
  const response = await instance.get(`/api/home/consecutiveDays`);
  return response.data;
};

const useGetConsecutiveDays = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['consecutiveDays'],
    queryFn: getConsecutiveDays,
  });

  return { data };
};

export default useGetConsecutiveDays;
