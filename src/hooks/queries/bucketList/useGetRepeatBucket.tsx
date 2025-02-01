import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetBucketResponse } from '../../../types/moment';

const getRepeatBucket = async (): Promise<GetBucketResponse> => {
  const response = await instance.get(`/api/bucket/all/repeat`);
  return response.data;
};

const useGetRepeatBucket = () =>
  useQuery({
    queryKey: ['repeat-buckets'],
    queryFn: () => getRepeatBucket(),
  });

export default useGetRepeatBucket;
