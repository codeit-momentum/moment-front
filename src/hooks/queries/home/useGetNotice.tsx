import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const NOTICE_QUERY_KEY = ['notice'];

const getNotice = async () => {
  const response = await instance.get('/api/home/notifications/unreadCount');

  return response.data;
};

const useGetNotice = () => {
  const { data } = useQuery({
    queryKey: NOTICE_QUERY_KEY,
    queryFn: getNotice,
  });

  return { data };
};

export default useGetNotice;
