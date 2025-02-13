import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import useGetNotice from './useGetNotice'; // 알림 개수 갱신을 위해 추가

const patchNotice = async ({}) => {
  const response = await instance.patch('/api/home/notifications');
  return response.data;
};

const usePatchNotice = () => {
  const { refetch } = useGetNotice(); // 알림 개수 갱신

  return useMutation({
    mutationFn: patchNotice,
    onSuccess: () => {
      refetch(); // 알림 읽음 처리 후 개수 갱신
    },
  });
};

export default usePatchNotice;
