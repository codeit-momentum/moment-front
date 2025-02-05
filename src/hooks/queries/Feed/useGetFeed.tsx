import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { MomentItemType } from '../../../types/feed';

interface FeedResponseType {
  friendCode: string;
  moments: MomentItemType[];
  nickname: string;
  status: string;
}

const FEED_QUERY_KEY = (friendId: string) => ['feed', friendId];

const getFeed = async (friendId: string): Promise<FeedResponseType> => {
  const response = await instance.get(`/api/feed/${friendId}`);

  return response.data;
};

const useGetFeed = (friendId: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: FEED_QUERY_KEY(friendId),
    queryFn: () => getFeed(friendId),
  });

  return { feed: data, nickname: data?.nickname, isPending, isError };
};

export default useGetFeed;
