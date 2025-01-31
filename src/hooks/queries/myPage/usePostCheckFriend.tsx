import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postCheckFriend = async (code: string) => {
  const response = await instance.post('/api/friends/check-friendCode', {
    friendCode: code,
  });
  return response.data;
};

const usePostCheckFriend = () => {
  return useMutation({
    mutationFn: postCheckFriend,
  });
};

export default usePostCheckFriend;
