import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { UpdateBucketResponse } from '../../../types/moment';

interface PatchBucketChallengeParams {
  bucketId: string;
}

const patchBucketChallenge = async ({
  bucketId,
}: PatchBucketChallengeParams): Promise<UpdateBucketResponse> => {
  const response = await instance.patch(`/api/bucket/${bucketId}/challenge`);
  return response.data;
};

const usePatchBucketChallenge = () => {
  return useMutation({
    mutationFn: patchBucketChallenge,
  });
};

export default usePatchBucketChallenge;
