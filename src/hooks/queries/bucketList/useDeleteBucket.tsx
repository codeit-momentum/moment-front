import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { DeleteBucketResponse } from '../../../types/moment';

const deleteBucket = async (id: string): Promise<DeleteBucketResponse> => {
  const response = await instance.delete(`/api/bucket/${id}`);
  return response.data;
};

const useDeleteBucket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBucket,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['buckets', data.type] });
    },
  });
};

export default useDeleteBucket;
