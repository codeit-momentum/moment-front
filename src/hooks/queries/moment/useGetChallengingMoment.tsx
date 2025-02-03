import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetChallengingMomentReponse } from '../../../types/moment';

const getChallengingMoment = async (): Promise<GetChallengingMomentReponse> => {
  const response = await instance.get('/api/bucket/challenging/main');
  return response.data;
};

const useGetChallengingMoment = () =>
  useQuery({
    queryKey: ['moments', 'challenging'],
    queryFn: getChallengingMoment,
  });

export default useGetChallengingMoment;
