import { useState, useEffect } from 'react';
import { FriendType, ActionType } from '../types';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType | object>(
    friendList[0],
  );
  const [action, setAction] = useState<ActionType>(null);

  const handleClickFriend = (userID: string) => {
    const targetFriend = friendList.find((friend) => friend.userID === userID);
    if (targetFriend) {
      setCurrentFriend(targetFriend);
    }
  };

  useEffect(() => {
    //친구를 삭제한 상태이거나 현재 친구가 설정되지 않은 경우
    if (action === 'delete' || !currentFriend) {
      setCurrentFriend(friendList[0]);
    }
  }, [currentFriend, friendList, action]);

  return { currentFriend, handleClickFriend, setCurrentFriend, setAction };
};

export default useCurrentFriend;
