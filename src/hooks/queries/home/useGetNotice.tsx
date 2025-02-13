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
  const { data, error, refetch } = useQuery({
    queryKey: NOTICE_QUERY_KEY,
    queryFn: getNotice,
    refetchInterval: 30000, // 30초마다 자동 갱신
    retry: 3, // 3번 재시도 (서버 불안정 시 대비)
    staleTime: 30000, // 데이터가 30초 동안 신선한 상태로 유지됨
  });

  if (error) {
    console.error('useGetNotice 에러 발생:', error);
  }

  return { data: data ?? 0, refetch }; // 🔥 refetch 추가
};

export default useGetNotice;
