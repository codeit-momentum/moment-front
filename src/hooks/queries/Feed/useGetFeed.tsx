import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const FEED_QUERY_KEY = (friendId: string) => ['feed', friendId];

const getFeed = async (friendId: string) => {
  const response = await instance.get(`/api/feed/${friendId}`);
  return response.data.moments;
};

const useGetFeed = (friendId: string) => {
  const { data, isPending } = useSuspenseQuery({
    queryKey: [FEED_QUERY_KEY, friendId],
    queryFn: () => getFeed(friendId),
  });

  return { feed: data, isPending };
};

export default useGetFeed;
