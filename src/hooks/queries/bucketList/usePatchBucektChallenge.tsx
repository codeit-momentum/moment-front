import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { UpdateBucketResponse } from '../../../types/moment';

interface PatchBucketChallengeParams {
  id: string;
}

const patchBucketChallenge = async ({
  id,
}: PatchBucketChallengeParams): Promise<UpdateBucketResponse> => {
  if (!id) {
    console.error('PATCH 요청 실패: bucketId가 없습니다.');
    throw new Error('PATCH 요청 실패: bucketId가 없습니다.');
  }

  try {
    const response = await instance.patch(`/api/bucket/${id}/challenge`);
    return response.data;
  } catch (error: any) {
    console.error(
      'PATCH 요청 오류 발생:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

const usePatchBucketChallenge = () => {
  return useMutation<UpdateBucketResponse, Error, PatchBucketChallengeParams>({
    mutationFn: patchBucketChallenge,

    onSuccess: (data) => {
      console.log('PATCH 요청 성공:', data);
    },
  });
};

export default usePatchBucketChallenge;
