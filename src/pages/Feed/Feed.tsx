import * as S from './Feed.style';
import EmptyFriend from './components/EmptyFriend/EmptyFriend';
import FriendCarousel from './components/FriendCarousel/FriendCarousel';
import FeedList from './components/FeedList/FeedList';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import useCurrentFriend from './hooks/useCurrentFriend';
import IcMenu from '../../assets/svg/feed/IcMenu';
import useGetFriends from './hooks/queries/useGetFriends';
import { useState } from 'react';
import FeedModal from './components/FeedModal/FeedModal';
import ModalType from './types/feed';

const Feed = () => {
  const { friendList } = useGetFriends();
  const { currentFriend, handleClickFriend, setCurrentFriend, setAction } =
    useCurrentFriend(friendList);
  const [isOpen, openModal, closeModal] = useModal();
  const [modalType, setModalType] = useState<ModalType>('friend');

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
            setAction={setAction}
          />
        </Modal>
      )}
      <S.FeedHeaderContatiner>
        <S.FeedTitleContainer>
          <S.FeedTitleHeader>친구들의 모멘트</S.FeedTitleHeader>
          {friendList.length > 0 && (
            <S.IconWrapper onClick={openModal}>
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
        <EmptyFriend />
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
