import * as S from './FeedList.style';
import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import useGetFeed from '../../hooks/queries/useGetFeed';
import { MomentItemType, FriendType } from '../../types';

interface FeedListProps {
  friendId: string;
  friendNickname: string;
  isKnocked: boolean;
  setCurrentFriend: React.Dispatch<React.SetStateAction<FriendType>>;
}

const FeedList = ({
  friendId,
  friendNickname,
  isKnocked,
  setCurrentFriend,
}: FeedListProps) => {
  const { feed, isPending } = useGetFeed(friendId);

  if (isPending) {
    return <div>로딩 중</div>;
  }
  return (
    <S.FeedListLayout>
      {feed?.moments.length === 0 || feed === undefined ? (
        <EmptyFeed
          friendId={friendId}
          friendNickname={friendNickname}
          isKnocked={isKnocked}
          setCurrentFriend={setCurrentFriend}
        />
      ) : (
        feed.moments.map((moment: MomentItemType) => (
          <FeedItem
            key={moment.momentId}
            friendId={friendId}
            momentItem={moment}
            name={friendNickname}
          />
        ))
      )}
    </S.FeedListLayout>
  );
};

export default FeedList;
