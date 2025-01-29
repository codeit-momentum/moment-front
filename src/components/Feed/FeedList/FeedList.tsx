import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import { FeedType } from '../../../types/feed';
import IcActiveFriends from './../../../assets/svg/IcActiveFriends';
import useGetFeed from '../../../hooks/queries/Feed/useGetFeed';
import formatDate from '../../../utils/formatDate';

interface FeedListProps {
  friendId: string;
}

const FeedList = ({ friendId }: FeedListProps) => {
  const { feed, nickname } = useGetFeed(friendId);

  return (
    <S.FeedListLayout>
      {
        //feedListArray가 비어있을 때 EmptyFeed 컴포넌트 렌더링
        feed === undefined ? (
          <EmptyFeed type="feed" icon={<IcActiveFriends />}>
            친구가 피드를 안 올리네요...
            <br /> <span style={{ color: '#FAED46' }}>노크를 해서 </span>
            재촉해보세요!
          </EmptyFeed>
        ) : (
          feed?.moments.map((moment) => (
            <FeedItem
              key={moment.momentId}
              name={nickname}
              content={moment.content}
              date={formatDate(moment.date)}
              image={moment.imageUrl}
            />
          ))
        )
      }
    </S.FeedListLayout>
  );
};

export default FeedList;
