import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetMomentDetailResponse } from '../../../types/moment';

const getMomentDetail = async (
  id: string,
): Promise<GetMomentDetailResponse> => {
  const response = await instance.get(`/api/bucket/moment/${id}`);
  return response.data;
};

const useGetMomentDetail = (id: string | null) =>
  useQuery({
    queryKey: ['moment', id],
    queryFn: () => {
      if (!id) throw new Error('id 없음');
      return getMomentDetail(id);
    },
    enabled: !!id,
  });

export default useGetMomentDetail;
