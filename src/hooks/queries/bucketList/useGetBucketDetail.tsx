import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetBucketDetailResponse } from '../../../types/moment';

const getBucketDetail = async (
  id: string,
): Promise<GetBucketDetailResponse> => {
  const response = await instance.get(`/api/bucket/${id}`);
  return response.data;
};

const useGetBucketDetail = (id: string) =>
  useQuery({
    queryKey: ['bucket', id],
    queryFn: () => getBucketDetail(id),
  });

export default useGetBucketDetail;
