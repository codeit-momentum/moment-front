import * as S from './Feed.style';
import EmptyFeed from '../../components/Feed/EmptyFeed/EmptyFeed';
import FriendCarousel from '../../components/Feed/FriendCarousel/FriendCarousel';
import FeedList from '../../components/Feed/FeedList/FeedList';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import SelectModal from '../../components/Modal/SelectModal/SelectModal';
import useCurrentFriend from '../../hooks/useCurrentFriend';
import IcMenu from '../../assets/svg/IcMenu';
import useGetFriends from '../../hooks/queries/Feed/useGetFriends';
import FeedModal from '../../components/Modal/FeedModal/FeedModal';
import usePatchFix from '../../hooks/queries/Feed/usePatchFix';
import useDeleteFriend from '../../hooks/queries/Feed/useDeleteFriend';
import { useNavigate } from 'react-router-dom';
import IcNoFriend from '../../assets/svg/IcNoFriend';
import { useState, useEffect } from 'react';
import OKModal from '../../components/Modal/OKModal/OKModal';

type ModalType = 'default' | 'delete' | 'ok';

const Feed = () => {
  const { friendList } = useGetFriends();
  const { mutate: patchFix } = usePatchFix();
  const { mutate: deleteFriend } = useDeleteFriend();
  const { currentFriend, handleClickFriend, setCurrentFriend } =
    useCurrentFriend(friendList);
  const [isOpen, openModal, closeModal] = useModal();
  const [modalType, setModalType] = useState<ModalType>('default');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mypage/friend');
  };

  const handleDelete = () => {
    deleteFriend(currentFriend.userID, {
      onSuccess: () => {
        setModalType('ok');
        setCurrentFriend(friendList[0]);
      },
    });
  };

  const handleFix = () => {
    patchFix(currentFriend.userID, {
      onSuccess: () => {
        setCurrentFriend({
          ...currentFriend,
          isFixed: !currentFriend.isFixed,
        });
      },
    });
  };

  const handleClose = () => {
    closeModal();
    setModalType('default');
  };

  const caseModal = (modalType: string) => {
    switch (modalType) {
      case 'delete':
        return (
          <SelectModal
            type="delete"
            content="이 행위는 되돌릴 수 없습니다."
            onClose={handleClose}
            onSubmit={handleDelete}
          >
            <span style={{ color: '#FAED46' }}>{currentFriend?.nickname}</span>
            님을 삭제하겠습니까?
          </SelectModal>
        );
      case 'ok':
        return (
          <OKModal
            mainText="친구 관계를
            성공적으로 삭제했습니다."
            onClose={handleClose}
          />
        );
      case 'default':
        return (
          <FeedModal
            title={currentFriend?.nickname}
            isFixed={currentFriend?.isFixed}
            onFix={handleFix}
            onDelete={() => {
              setModalType('delete');
            }}
            onClose={closeModal}
          />
        );
      default:
        return;
    }
  };

  useEffect(() => {
    setCurrentFriend(friendList[0]);
  }, [friendList, setCurrentFriend]);

  return (
    <S.FeedLayout>
      {isOpen && <Modal>{caseModal(modalType)}</Modal>}
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
