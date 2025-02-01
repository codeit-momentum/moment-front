import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const deleteBucket = async (id: string) => {
  const response = await instance.delete(`/api/bucket/${id}`);
  return response.data;
};

const useDeleteBucket = () => {
  return useMutation({
    mutationFn: deleteBucket,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteBucket;
