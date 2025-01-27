import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const USER_QUERY_KEY = ['user'];

const getUser = async () => {
  const response = await instance.get('/api/users');
  return response.data;
};

const useGetUser = () => {
  const { data } = useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUser,
  });
  return data?.user;
};

export default useGetUser;
