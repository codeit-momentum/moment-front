import * as S from './MyPage.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import MyMenu from '../../components/MyPage/MyMenu/MyMenu';
import useGetUser from '../../hooks/queries/myPage/useGetUser';
import IcEditProfile from '../../assets/svg/IcEditProfile';
import IcAddFriend from '../../assets/svg/IcAddFriend';
import IcLogout from '../../assets/svg/IcLogout';
import IcGetOut from '../../assets/svg/IcGetOut';
import useDeleteAccount from '../../hooks/queries/myPage/useDeleteAccount';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import SelectModal from '../../components/Modal/SelectModal/SelectModal';
import OKModal from '../../components/Modal/OKModal/OKModal';

const MyPage = () => {
  const { data: userData } = useGetUser();
  const navigate = useNavigate();
  const { mutate: deleteAccount } = useDeleteAccount();
  const [isOpen, openModal, closeModal] = useModal();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const menuItems = [
    {
      label: '내 정보 수정하기',
      name: 'edit',
      icon: <IcEditProfile />,
      action: () => {
        navigate('edit');
      },
    },
    {
      label: '친구 추가하기',
      name: 'friend',
      icon: <IcAddFriend />,
      action: () => {
        navigate('friend');
      },
    },
    {
      label: '로그아웃',
      name: 'logout',
      icon: <IcLogout />,
      action: () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
      },
    },
    {
      label: '회원탈퇴',
      name: 'cancel',
      icon: (
        <S.IconWrapper>
          <IcGetOut />
        </S.IconWrapper>
      ),
      action: () => {
        openModal();
      },
    },
  ];

  const handleDelete = () => {
    deleteAccount(
      {},
      {
        onSuccess: (data) => {
          setMessage(data.message);
        },
        onSettled: () => {
          setIsDeleting(true);
        },
      },
    );
  };

  const handleClos = () => {
    closeModal();
    navigate('/');
  };

  return (
    <S.MyPageLayout>
      {isOpen && (
        <Modal>
          {isDeleting ? (
            <OKModal onClose={handleClos}>{message}</OKModal>
          ) : (
            <SelectModal
              type="delete"
              content="한번 탈퇴하면 되돌릴 수 없습니다..."
              onSubmit={handleDelete}
              onClose={closeModal}
            >
              정말 계정을 삭제하시겠습니까?
            </SelectModal>
          )}
        </Modal>
      )}
      <MyProfile
        name={userData.nickname}
        email={userData.email}
        profileImage={userData.profileImageUrl}
      />
      <S.Horizontal />
      <MyMenu menuItems={menuItems} />
    </S.MyPageLayout>
  );
};

export default MyPage;
