import { useState } from 'react';
import { FriendType } from '../types/feed';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType | undefined>(
    friendList.length > 0 ? friendList[0] : undefined,
  );

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    setCurrentFriend(targetFriend);
  };

  return { currentFriend, handleClickFriend };
};

export default useCurrentFriend;
