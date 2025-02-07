import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface BucketResponse {
  success: boolean;
  messages: string;
  bucket: number;
}

// API 호출 함수
const fetchBucketStatus = async (): Promise<BucketResponse> => {
  const response = await instance.get<BucketResponse>('/home/bucket', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

// React Query 훅
const useGetBucketAchievement = () => {
  return useQuery<BucketResponse, Error>({
    queryKey: ['bucketStatus'],
    queryFn: fetchBucketStatus,
  });
};

export default useGetBucketAchievement;
