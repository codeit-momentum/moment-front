import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { UpdateBucketResponse } from '../../../types/moment';

interface PatchBucketParams {
  id: string;
  content: string;
}

const patchBucket = async ({
  id,
  content,
}: PatchBucketParams): Promise<UpdateBucketResponse> => {
  const response = await instance.patch(`/api/bucket/${id}`, {
    content: content,
  });
  return response.data;
};

const usePatchBucket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchBucket,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['buckets', data.bucket.type],
      });
    },
  });
};

export default usePatchBucket;
