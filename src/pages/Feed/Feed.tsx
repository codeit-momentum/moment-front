import * as S from './Feed.style';
import EmptyFeed from '../../components/Feed/EmptyFeed/EmptyFeed';
import FriendCarousel from '../../components/Feed/FriendCarousel/FriendCarousel';
import FeedList from '../../components/Feed/FeedList/FeedList';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import useCurrentFriend from '../../hooks/feed/useCurrentFriend';
import IcMenu from '../../assets/svg/feed/IcMenu';
import useGetFriends from '../../hooks/queries/Feed/useGetFriends';
import { useNavigate } from 'react-router-dom';
import IcNoFriend from '../../assets/svg/feed/IcNoFriend';
import { useState, useEffect } from 'react';
import FeedModal from '../../components/Feed/FeedModal/FeedModal';
import ModalType from '../../types/feed';

const Feed = () => {
  const { friendList } = useGetFriends();
  const { currentFriend, handleClickFriend, setCurrentFriend } =
    useCurrentFriend(friendList);
  const [isOpen, openModal, closeModal] = useModal();
  const [modalType, setModalType] = useState<ModalType>('friend');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mypage/friend');
  };

  useEffect(() => {
    if (currentFriend) {
      setCurrentFriend(currentFriend);
    } else {
      setCurrentFriend(friendList[0]);
    }
  }, [currentFriend, friendList, setCurrentFriend]);

  return (
    <S.FeedLayout>
      {isOpen && (
        <Modal>
          <FeedModal
            modalType={modalType}
            setModalType={setModalType}
            currentFriend={currentFriend}
            setCurrentFriend={setCurrentFriend}
            closeModal={closeModal}
            friendList={friendList}
          />
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
          currentFriendId={currentFriend?.userID}
          onClickFriend={handleClickFriend}
        />
      </S.FeedHeaderContatiner>
      {friendList.length === 0 ? (
        <S.EmptyFeedWrapper>
          <EmptyFeed
            type="friend"
            icon={<IcNoFriend />}
            onClick={handleNavigate}
          >
            친구를 추가해서
            <br /> 달성기록을 공유해보세요.
          </EmptyFeed>
        </S.EmptyFeedWrapper>
      ) : (
        <FeedList
          friendId={currentFriend?.userID}
          friendNickname={currentFriend?.nickname}
          isKnocked={currentFriend?.isKnock}
        />
      )}
    </S.FeedLayout>
  );
};

export default Feed;
