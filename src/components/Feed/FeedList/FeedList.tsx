import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import IcActiveFriends from './../../../assets/svg/IcActiveFriends';
import useGetFeed from '../../../hooks/queries/Feed/useGetFeed';
import formatDate from '../../../utils/formatDate';
import { MomentItemType } from '../../../types/feed';
import usePostKnock from '../../../hooks/queries/Feed/usePostKnock';
import useModal from '../../../hooks/common/useModal';

interface FeedListProps {
  friendId: string;
}

const FeedList = ({ friendId }: FeedListProps) => {
  const { feed, nickname } = useGetFeed(friendId);
  const { mutate: postKnock } = usePostKnock();
  //const [isOpen, openModal, closeModal] = useModal();

  const handleKnock = () => {
    postKnock(friendId, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <S.FeedListLayout>
      {feed === undefined ? (
        <EmptyFeed type="feed" icon={<IcActiveFriends />} onClick={handleKnock}>
          친구가 피드를 안 올리네요...
          <br /> <span style={{ color: '#FAED46' }}>노크를 해서 </span>
          재촉해보세요!
        </EmptyFeed>
      ) : (
        feed?.moments.map((moment: MomentItemType) => (
          <FeedItem
            key={moment.momentId}
            name={nickname}
            content={moment.content}
            date={formatDate(moment.date)}
            image={moment.imageUrl}
          />
        ))
      )}
    </S.FeedListLayout>
  );
};

export default FeedList;
