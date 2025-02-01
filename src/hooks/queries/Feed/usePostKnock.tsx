import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postKnock = async (friendId: string) => {
  const response = await instance.post('/api/friends/knock', {
    friendUserID: friendId,
  });

  return response;
};

const usePostKnock = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postKnock,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['friends'],
      });
    },
  });
};

export default usePostKnock;
