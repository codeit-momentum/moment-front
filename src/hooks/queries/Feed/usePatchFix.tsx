import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface FixFriendResponseType {
  friend: {
    fixedAt: string;
    friendUserID: string;
    isFixed: boolean;
    userID: string;
  };
  message: string;
}

const patchFix = async (friendId: string): Promise<FixFriendResponseType> => {
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
