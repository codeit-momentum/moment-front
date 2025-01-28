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
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostCheckFriend;
