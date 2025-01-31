import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const postCheer = async (feedId: string) => {
  const response = await instance.post(`/api/friends/cheer/${feedId}`);
  return response.data;
};

const usePostCheer = () => {
  return useMutation({
    mutationFn: postCheer,
  });
};

export default usePostCheer;
