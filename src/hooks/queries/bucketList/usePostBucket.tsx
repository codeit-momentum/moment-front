import { BucketType, BucketResponse } from '../../../types/moment';
import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface PostBucketParams {
  type: BucketType;
  content: string;
}

const postBucket = async (body: PostBucketParams): Promise<BucketResponse> => {
  const response = await instance.post('/api/bucket', body);
  return response.data;
};

const usePostBucket = () => {
  return useMutation({
    mutationFn: postBucket,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostBucket;
