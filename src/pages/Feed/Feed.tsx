import * as S from './Feed.style';
import EmptyFeed from '../../components/Feed/EmptyFeed/EmptyFeed';
import FriendCarousel from '../../components/Feed/FriendCarousel/FriendCarousel';
import FeedList from '../../components/Feed/FeedList/FeedList';
import { FriendType } from './../../types/feed/index.d';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import SelectModal from '../../components/Modal/SelectModal/SelectModal';
import useCurrentFriend from '../../hooks/useCurrentFriend';
import IcActiveFriends from '../../assets/svg/IcActiveFriends';
import image from '../../assets/images/mockImage.jpg';
import IcMenu from '../../assets/svg/IcMenu';

const Feed = () => {
  //페이지에서 친구 리스트 받아와야 데이터 다루기 편할 듯하다.
  const friendList: FriendType[] = [
    {
      friendId: 1,
      image: image,
      name: '필수',
    },
    {
      friendId: 2,
      image: image,
      name: '도희',
    },
    {
      friendId: 3,
      image: image,
      name: '지윤',
    },
    {
      friendId: 4,
      image: image,
      name: '가연',
    },
    {
      friendId: 5,
      image: image,
      name: '윤지',
    },
    {
      friendId: 6,
      image: image,
      name: '주희',
    },
  ];

  //현재 친구 id를 FeedList 에 전달

  const { currentFriend, handleClickFriend } = useCurrentFriend(friendList);
  const [isOpen, openModal, closeModal] = useModal();
  const handleDelete = () => {
    alert('친구 삭제');
    closeModal();
  };

  return (
    <S.FeedLayout>
      {isOpen && (
        <Modal>
          <SelectModal
            type="delete"
            content="이 행위는 되돌릴 수 없습니다."
            onClose={closeModal}
            onSubmit={handleDelete}
          >
            <span style={{ color: '#FAED46' }}>{currentFriend?.name}</span>님을
            삭제하겠습니까?
          </SelectModal>
        </Modal>
      )}
      <S.FeedHeaderContatiner>
        <S.FeedTitleContainer>
          <S.FeedTitleHeader>친구들의 모멘트</S.FeedTitleHeader>
          {friendList.length > 0 && (
            <S.IconWrapper
              onClick={() => {
                openModal();
              }}
            >
              <IcMenu />
            </S.IconWrapper>
          )}
        </S.FeedTitleContainer>
        <FriendCarousel
          friendList={friendList}
          currentFriendId={currentFriend?.friendId}
          onClickFriend={handleClickFriend}
        />
      </S.FeedHeaderContatiner>
      {friendList.length === 0 ? (
        <S.EmptyFeedWrapper>
          <EmptyFeed type="friend" icon={<IcActiveFriends />}>
            친구를 추가해서
            <br /> 달성기록을 공유해보세요.
          </EmptyFeed>
        </S.EmptyFeedWrapper>
      ) : (
        <FeedList friendId={currentFriend?.friendId} />
      )}
    </S.FeedLayout>
  );
};

export default Feed;
