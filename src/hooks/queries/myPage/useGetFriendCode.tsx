import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const FRIENDCODE_QUERY_KEY = ['friendCode'];

const getFriendCode = async () => {
  const response = await instance.get('/api/users/friendCode');

  return response.data.friendCode;
};

const useGetFriendCode = () => {
  const { data } = useSuspenseQuery({
    queryKey: FRIENDCODE_QUERY_KEY,
    queryFn: getFriendCode,
  });

  return { data };
};

export default useGetFriendCode;
