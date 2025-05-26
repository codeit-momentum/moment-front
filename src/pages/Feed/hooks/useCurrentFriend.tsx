import { useState, useEffect } from 'react';
import { FriendType } from '../../types/feed';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType>(friendList[0]);

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    if (targetFriend) {
      setCurrentFriend(targetFriend);
    }
  };

  useEffect(() => {
    if (currentFriend) {
      setCurrentFriend(currentFriend);
    } else {
      setCurrentFriend(friendList[0]);
    }
  }, [currentFriend, friendList, setCurrentFriend]);

  return { currentFriend, handleClickFriend, setCurrentFriend };
};

export default useCurrentFriend;
