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
}

const FeedList = ({ friendId, friendNickname }: FeedListProps) => {
  const { feed } = useGetFeed(friendId);
  const { mutate: postKnock } = usePostKnock();
  const [isOpen, openModal, closeModal] = useModal();

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
  console.log(feed);

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
      {feed === undefined ? (
        <EmptyFeed type="feed" icon={<IcKnock />} onClick={handleKnock}>
          친구가 피드를 안 올리네요...
          <br /> <span style={{ color: '#FAED46' }}>노크를 해서 </span>
          재촉해보세요!
        </EmptyFeed>
      ) : (
        feed?.moments.map((moment: MomentItemType) => (
          <FeedItem
            key={moment.momentId}
            feedId={moment.momentId}
            name={friendNickname}
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
