import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetChallengingCountResponse } from '../../../types/moment';

const getChallengingCount = async (): Promise<GetChallengingCountResponse> => {
  const response = await instance.get('/api/bucket/challenging/count');
  return response.data;
};

const useGetChallengingCount = () =>
  useSuspenseQuery({
    queryKey: ['moments', 'count'],
    queryFn: getChallengingCount,
  });

export default useGetChallengingCount;
