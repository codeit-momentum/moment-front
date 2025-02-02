import { BucketType, UpdateBucketResponse } from '../../../types/moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface PostBucketParams {
  type: BucketType;
  content: string;
}

const postBucket = async (
  body: PostBucketParams,
): Promise<UpdateBucketResponse> => {
  const response = await instance.post('/api/bucket', body);
  return response.data;
};

const usePostBucket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBucket,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['buckets', data.bucket.type],
      });
    },
  });
};

export default usePostBucket;
