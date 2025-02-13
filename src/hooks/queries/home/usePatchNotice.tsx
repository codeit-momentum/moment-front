import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const patchNotice = async ({}) => {
  const response = await instance.patch('/api/home/notifications');
  return response.data;
};

const usePatchNotice = () => {
  return useMutation({
    mutationFn: patchNotice,
  });
};

export default usePatchNotice;
