import { useSuspenseQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';
import { FriendType } from '../../../types/feed';

interface FriendListResponseType {
  friends: FriendType[];
  message: string;
}

export const FRIENDS_QUERY_KEY = ['friends'];

const getFriends = async (): Promise<FriendListResponseType> => {
  const response = await instance.get('/api/friends');
  return response.data.friends;
};

const useGetFriends = () => {
  const { data, isPending } = useSuspenseQuery({
    queryKey: FRIENDS_QUERY_KEY,
    queryFn: getFriends,
  });

  return { friendList: data, isPending };
};

export default useGetFriends;
