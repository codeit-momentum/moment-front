import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import useGetFeed from '../../hooks/queries/useGetFeed';
import { formatDate } from '../../../../utils/formatDate';
import { MomentItemType } from '../../types/feed';
import formatFrequency from '../../../../utils/formatFrequency';

interface FeedListProps {
  friendId: string;
  friendNickname: string;
  isKnocked: boolean;
  setCurrentFriend: () => void;
}

const FeedList = ({
  friendId,
  friendNickname,
  isKnocked,
  setCurrentFriend,
}: FeedListProps) => {
  const { feed } = useGetFeed(friendId);

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
        feed?.moments.map((moment: MomentItemType) => (
          <FeedItem
            key={moment.momentId}
            friendId={friendId}
            momentId={moment.momentId}
            name={friendNickname}
            content={moment.bucketContent}
            date={formatDate(moment.date)}
            image={moment.imageUrl}
            cheered={moment.cheered}
            frequency={formatFrequency(moment.frequency)}
          />
        ))
      )}
    </S.FeedListLayout>
  );
};

export default FeedList;
