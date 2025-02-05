import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetBucketDetailResponse } from '../../../types/moment';

const getBucketDetail = async (
  id: string,
): Promise<GetBucketDetailResponse> => {
  const response = await instance.get(`/api/bucket/${id}`);
  return response.data;
};

const useGetBucketDetail = (id: string | null) =>
  useQuery({
    queryKey: ['bucket', id],
    queryFn: () => {
      if (!id) throw new Error('id 없음');
      return getBucketDetail(id);
    },
    enabled: !!id,
  });

export default useGetBucketDetail;
