import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

//API 요청 데이터 타입 정의
interface Moment {
  content: string;
  startDate: string;
  endDate: string;
}

interface PostMomentsPayload {
  startDate: string;
  endDate: string;
  moments: Moment[];
  frequency: string;
}

interface PostMomentsResponse {
  success: boolean;
  message: string;
}

// API 요청 함수 정의
const postMoments = async (
  bucketId: string,
  payload: PostMomentsPayload,
): Promise<PostMomentsResponse> => {
  const response = await instance.post(
    `/api/bucket/moments/${bucketId}`,
    payload,
  );
  return response.data;
};

// React Query의 `useMutation`을 활용한 API 요청 함수
const usePostMoments = () => {
  return useMutation<
    PostMomentsResponse,
    Error,
    { bucketId: string; payload: PostMomentsPayload }
  >({
    mutationFn: ({ bucketId, payload }) => postMoments(bucketId, payload),
  });
};

export default usePostMoments;
