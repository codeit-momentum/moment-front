import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import useGetFeed from '../../../hooks/queries/Feed/useGetFeed';
import formatDate from '../../../utils/formatDate';
import { MomentItemType } from '../../../types/feed';
import usePostKnock from '../../../hooks/queries/Feed/usePostKnock';
import useModal from '../../../hooks/common/useModal';
import OKModal from '../../Modal/OKModal/OKModal';
import Modal from '../../Modal/Modal';
import IcKnock from '../../../assets/svg/IcKnock';

interface FeedListProps {
  friendId: string;
  friendNickname: string;
  isKnocked: boolean;
}

const FeedList = ({ friendId, friendNickname, isKnocked }: FeedListProps) => {
  const { feed } = useGetFeed(friendId);
  const { mutate: postKnock } = usePostKnock();
  const [isOpen, openModal, closeModal] = useModal();

  console.log(feed);
  const handleKnock = () => {
    postKnock(friendId, {
      onSuccess: () => {
        openModal();
      },
      onError: () => {
        alert('에러 발생');
      },
    });
  };

  return (
    <S.FeedListLayout>
      {isOpen && (
        <Modal>
          <OKModal
            title=""
            mainText={`${friendNickname}님께 노크하였습니다!`}
            subText="피드를 곧 올려주실 거예요!"
            onClose={closeModal}
          />
        </Modal>
      )}
      {feed?.moments.length === 0 ? (
        <EmptyFeed
          type="feed"
          icon={<IcKnock />}
          onClick={handleKnock}
          isKnocked={isKnocked}
        >
          친구가 피드를 안 올리네요...
          <br /> <span style={{ color: '#FAED46' }}>노크를 해서 </span>
          재촉해보세요!
        </EmptyFeed>
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
          />
        ))
      )}
    </S.FeedListLayout>
  );
};

export default FeedList;
