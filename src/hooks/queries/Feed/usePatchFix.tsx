import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';

const patchFix = async (friendId: string) => {
  const response = await instance.patch('/api/friends/fixed', {
    friendUserID: friendId,
  });

  return response.data;
};

const usePatchFix = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchFix,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['friends'],
      });
    },
  });
};

export default usePatchFix;
