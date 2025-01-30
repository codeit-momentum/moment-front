import instance from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

const deleteFriend = async (friendId: string) => {
  const response = await instance.delete('/api/friends', {
    data: {
      friendId: friendId,
    },
  });

  return response.data;
};

const useDeleteFriend = () => {
  return useMutation({
    mutationFn: deleteFriend,
  });
};

export default useDeleteFriend;
