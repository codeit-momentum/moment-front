import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const FEED_QUERY_KEY = (friendId: string) => ['feed', friendId];

const getFeed = async (friendId: string) => {
  const response = await instance.get(`/api/feed/${friendId}`);
  console.log(response);
  return response.data;
};

const useGetFeed = (friendId: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: [FEED_QUERY_KEY, friendId],
    queryFn: () => getFeed(friendId),
  });

  return { feed: data, nickname: data?.nickname, isPending, isError };
};

export default useGetFeed;
