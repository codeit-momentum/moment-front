import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postFriend = async (code: string) => {
  const response = await instance.post('/api/friends/', {
    friendCode: code,
  });
  return response.data;
};

const usePostFriend = () => {
  return useMutation({
    mutationFn: postFriend,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostFriend;
