import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface KncokResponseType {
  status: string;
  message: string;
}

const postKnock = async (friendId: string): Promise<KncokResponseType> => {
  const response = await instance.post('/api/friends/knock', {
    friendUserID: friendId,
  });

  return response.data;
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
