import { BucketType, PostBucketResponse } from '../../../types/moment';
import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface BucketRequest {
  type: BucketType;
  content: string;
}

// fetch 함수 작성
const postBucket = async (body: BucketRequest): Promise<PostBucketResponse> => {
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
