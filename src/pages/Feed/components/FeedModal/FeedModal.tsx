import SelectModal from '../../../../components/Modal/SelectModal/SelectModal';
import OKModal from '../../../../components/Modal/OKModal/OKModal';
import FriendModal from '../../../../components/Modal/FriendModal/FriendModal';
import useDeleteFriend from '../../hooks/queries/useDeleteFriend';
import usePatchFix from '../../hooks/queries/usePatchFix';
import { FriendType, ModalType } from '../../types';
import React, { useState } from 'react';

interface FeedModalProps {
  currentFriend: FriendType;
  setCurrentFriend: React.Dispatch<React.SetStateAction<FriendType | null>>;
  closeModal: () => void;
}

const FeedModal = ({
  friendList,
  currentFriend,
  setCurrentFriend,
  closeModal,
}: FeedModalProps) => {
  const [modalType, setModalType] = useState<ModalType>('friend');
  const { mutate: deleteFriend } = useDeleteFriend();
  const { mutate: patchFix } = usePatchFix();

  const handleDelete = () => {
    deleteFriend(currentFriend.userID, {
      onSuccess: () => {
        setCurrentFriend(null);
        setModalType('ok');
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
    setModalType('friend');
  };

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
        <OKModal onClose={handleClose}>
          친구 관계를 <br /> 성공적으로 삭제했습니다.
        </OKModal>
      );
    case 'friend':
      return (
        <FriendModal
          title={currentFriend.nickname}
          isFixed={currentFriend.isFixed}
          onFix={handleFix}
          onDelete={() => {
            setModalType('delete');
          }}
          onClose={closeModal}
        />
      );
  }
};

export default FeedModal;
