import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import useGetFeed from '../../../hooks/queries/Feed/useGetFeed';
import formatDate from '../../../utils/formatDate';
import { FriendType, MomentItemType } from '../../../types/feed';
import usePostKnock from '../../../hooks/queries/Feed/usePostKnock';
import useModal from '../../../hooks/common/useModal';
import OKModal from '../../Modal/OKModal/OKModal';
import Modal from '../../Modal/Modal';
import IcKnock from '../../../assets/svg/IcKnock';
import formatFrequency from '../../../utils/formatFrequency';
import useGetFriends from '../../../hooks/queries/Feed/useGetFriends';

interface FeedListProps {
  friendId: string;
  friendNickname: string;
  isKnocked: boolean;
}

const FeedList = ({ friendId, friendNickname }: FeedListProps) => {
  const { friendList, refetch } = useGetFriends();
  const current = friendList.find(
    (friend: FriendType) => friend.userID === friendId,
  );
  const { feed } = useGetFeed(friendId);
  const { mutate: postKnock } = usePostKnock();
  const [isOpen, openModal, closeModal] = useModal();

  const handleKnock = () => {
    postKnock(friendId, {
      onSuccess: () => {
        openModal();
        refetch();
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
            subText="피드를 곧 올려주실 거예요!"
            onClose={closeModal}
          >
            <span style={{ color: '#FAED46' }}>{friendNickname}</span>님께
            노크하였습니다!
          </OKModal>
        </Modal>
      )}
      {feed?.moments.length === 0 || feed === undefined ? (
        <EmptyFeed
          type="feed"
          icon={<IcKnock />}
          onClick={handleKnock}
          isKnocked={current?.isKnock}
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
            cheered={moment.cheered}
            frequency={formatFrequency(moment.frequency)}
          />
        ))
      )}
    </S.FeedListLayout>
  );
};

export default FeedList;
