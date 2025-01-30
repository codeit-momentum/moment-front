import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postFix = async (friendId: string) => {
  const response = await instance.post('/api/friends/fixed', {
    friendUserID: friendId,
  });

  return response.data;
};

const usePostFix = () => {
  return useMutation({
    mutationFn: postFix,
  });
};

export default usePostFix;
