import { useState, useEffect } from 'react';
import { FriendType } from '../../types/feed';

type ActionType = 'delete' | 'fix' | null;

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType>(friendList[0]);
  const [action, setAction] = useState<ActionType>(null);

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    if (targetFriend) {
      setCurrentFriend(targetFriend);
    }
  };

  useEffect(() => {
    if (action === 'delete' || !currentFriend) {
      setCurrentFriend(friendList[0]);
    }

    setAction(null);
  }, [currentFriend, friendList, action]);

  return { currentFriend, handleClickFriend, setCurrentFriend, setAction };
};

export default useCurrentFriend;
