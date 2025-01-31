import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { BucketDetailResponse } from '../../../types/moment';

const fetchBucketDetail = async (id: string): Promise<BucketDetailResponse> => {
  const response = await instance.get(`/api/bucket/${id}`);
  return response.data;
};

const useGetBucketDetail = (id: string) =>
  useQuery({
    queryKey: ['bucket', id],
    queryFn: () => fetchBucketDetail(id),
  });

export default useGetBucketDetail;
