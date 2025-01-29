import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

const FRIENDS_QUERY_KEY = ['friends'];

const getFriends = async () => {
  const response = await instance.get('/api/friends');
  return response.data.friends;
};

const useGetFriends = () => {
  const { data, isPending } = useQuery({
    queryKey: FRIENDS_QUERY_KEY,
    queryFn: getFriends,
  });

  return { friendList: data, isPending };
};

export default useGetFriends;
