import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postKnock = async (friendId: string) => {
  const response = await instance.post('/api/friends/knock', {
    friendUserID: friendId,
  });

  return response;
};

const usePostKnock = () => {
  return useMutation({
    mutationFn: postKnock,
  });
};

export default usePostKnock;
