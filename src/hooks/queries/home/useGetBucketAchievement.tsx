import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface BucketResponse {
  success: boolean;
  completedBucketsCount: number;
  completionRate: string;
}

// API 호출 함수
const fetchBucketStatus = async (): Promise<BucketResponse> => {
  const response = await instance.get<BucketResponse>('/api/home');
  return response.data;
};

// React Query 훅
const useGetBucketAchievement = () => {
  return useSuspenseQuery<BucketResponse, Error>({
    queryKey: ['bucketStatus'],
    queryFn: fetchBucketStatus,
  });
};

export default useGetBucketAchievement;
