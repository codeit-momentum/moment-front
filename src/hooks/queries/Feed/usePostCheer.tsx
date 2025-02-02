import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface CheerProps {
  momentId: string;
  friendId: string;
}

const postCheer = async ({ momentId, friendId }: CheerProps) => {
  const response = await instance.post(
    `/api/friends/cheer/${friendId}/${momentId}`,
  );
  return response.data;
};

const usePostCheer = () => {
  return useMutation({
    mutationFn: postCheer,
  });
};

export default usePostCheer;
