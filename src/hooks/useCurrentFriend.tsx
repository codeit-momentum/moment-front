import { useState } from 'react';
import { FriendType } from '../types/feed';

const useCurrentFriend = (friendList: FriendType[]) => {
  const [currentFriend, setCurrentFriend] = useState<FriendType | undefined>(
    friendList.length > 0 ? friendList[0] : undefined,
  );

  const handleClickFriend = (friendId: number) => {
    const targetFriend = friendList.find(
      (friend) => friend.friendId === friendId,
    );
    setCurrentFriend(targetFriend);
  };

  return { currentFriend, handleClickFriend };
};

export default useCurrentFriend;
