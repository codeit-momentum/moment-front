import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';
import {
  PostMomentsPayload,
  PostMomentsResponse,
} from '../../../types/moment/create';

//API 요청 데이터 타입 정의
interface PostMomentsParams {
  bucketId: string;
  payload: PostMomentsPayload;
}

// API 요청 함수 정의
const postMoments = async ({
  bucketId,
  payload,
}: PostMomentsParams): Promise<PostMomentsResponse> => {
  await instance.patch(`/api/bucket/${bucketId}/challenge`);
  try {
    const response = await instance.post(
      `/api/bucket/moments/${bucketId}`,
      payload,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    await instance.patch(`/api/bucket/${bucketId}/un-challenge`);
    throw error;
  }
};

// React Query의 `useMutation`을 활용한 API 요청 함수
const usePostMoments = () => {
  return useMutation({
    mutationFn: postMoments,
  });
};

export default usePostMoments;
