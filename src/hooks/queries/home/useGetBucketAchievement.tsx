import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// API 응답 타입 정의
interface BucketResponse {
  success: boolean;
  messages: string;
  bucket: number; // 버킷리스트 달성률 (0.23 등 소수점 포함)
}

// API 호출 함수
const fetchBucketStatus = async (): Promise<BucketResponse> => {
  const response = await instance.get('/home/bucket', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

// React Query 훅
export const useGetBucketStatus = () => {
  return useQuery(['bucketStatus'], fetchBucketStatus);
};
