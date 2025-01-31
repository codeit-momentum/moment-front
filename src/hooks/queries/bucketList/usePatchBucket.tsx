import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { BucketResponse } from '../../../types/moment';

interface PatchBucketParams {
  id: string;
  content: string;
}

const patchBucket = async ({
  id,
  content,
}: PatchBucketParams): Promise<BucketResponse> => {
  const response = await instance.patch(`/api/bucket/${id}`, {
    content: content,
  });
  return response.data;
};

const usePatchBucket = () => {
  return useMutation({
    mutationFn: patchBucket,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchBucket;
