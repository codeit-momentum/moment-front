import { useState } from 'react';
import { FriendType } from '../types/feed';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType>(friendList[0]);

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    if (targetFriend) {
      setCurrentFriend(targetFriend);
    }
  };

  return { currentFriend, handleClickFriend };
};

export default useCurrentFriend;
