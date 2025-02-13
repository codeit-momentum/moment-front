import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const NOTICE_QUERY_KEY = ['notice'];

const getNotice = async () => {
  const response = await instance.get('/api/home/notifications/unreadCount', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`, // 토큰 추가
    },
  });

  console.log('getNotice API 응답:', response.data); // 응답 확인용 로그

  return response.data.count; // count 값만 반환
};

const useGetNotice = () => {
  const { data, refetch } = useQuery({
    queryKey: NOTICE_QUERY_KEY,
    queryFn: getNotice,
  });

  return { data: data ?? 0, refetch }; // 🔥 refetch 추가
};

export default useGetNotice;
