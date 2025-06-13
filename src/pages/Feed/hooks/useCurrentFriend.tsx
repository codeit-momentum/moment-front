import { useState, useEffect } from 'react';
import { FriendType } from '../types';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType | null>(null);

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    if (targetFriend) {
      setCurrentFriend(targetFriend);
    }
  };

  useEffect(() => {
    if (currentFriend === null) {
      setCurrentFriend(friendList[0] ?? null);
    }
  }, [currentFriend, friendList]);

  return {
    currentFriend,
    handleClickFriend,
    setCurrentFriend,
  };
};

export default useCurrentFriend;
