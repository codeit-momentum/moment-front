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
  console.log(friendList, currentFriend);
  console.log('리렌더링');

  useEffect(() => {
    console.log('useEffect 호출');
    if (currentFriend === null) {
      setCurrentFriend(friendList[0] ?? null);
    }
  }, [currentFriend, friendList]);
  return { currentFriend, handleClickFriend, setCurrentFriend };
};

export default useCurrentFriend;
