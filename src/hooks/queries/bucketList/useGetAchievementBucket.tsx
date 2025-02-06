import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { GetBucketResponse } from '../../../types/moment';

const getAchievementBucket = async (): Promise<GetBucketResponse> => {
  const response = await instance.get(`/api/bucket/all/achievement`);
  return response.data;
};

const useGetAchievementBucket = () =>
  useSuspenseQuery({
    queryKey: ['buckets', 'ACHIEVEMENT'],
    queryFn: () => getAchievementBucket(),
  });

export default useGetAchievementBucket;
