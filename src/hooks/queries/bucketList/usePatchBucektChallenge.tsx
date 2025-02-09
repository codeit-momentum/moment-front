import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { UpdateBucketResponse } from '../../../types/moment';

interface PatchBucketChallengeParams {
  id: string;
}

const patchBucketChallenge = async ({
  id,
}: PatchBucketChallengeParams): Promise<UpdateBucketResponse> => {
  const response = await instance.patch(`/api/bucket/${id}/challenge`);
  return response.data;
};

const usePatchBucketChallenge = () => {
  return useMutation({
    mutationFn: patchBucketChallenge,
  });
};

export default usePatchBucketChallenge;
