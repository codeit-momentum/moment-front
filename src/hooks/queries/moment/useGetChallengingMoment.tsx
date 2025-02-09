import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetChallengingMomentResponse } from '../../../types/moment';

const getChallengingMoment =
  async (): Promise<GetChallengingMomentResponse> => {
    const response = await instance.get('/api/bucket/challenging/main');
    return response.data;
  };

const useGetChallengingMoment = () =>
  useSuspenseQuery({
    queryKey: ['moments', 'challenging'],
    queryFn: getChallengingMoment,
  });

export default useGetChallengingMoment;
