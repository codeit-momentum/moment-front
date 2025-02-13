import * as S from './MyPage.style';
import { useNavigate } from 'react-router-dom';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import MyMenu from '../../components/MyPage/MyMenu/MyMenu';
import useGetUser from '../../hooks/queries/myPage/useGetUser';
import IcEditProfile from '../../assets/svg/IcEditProfile';
import IcAddFriend from '../../assets/svg/IcAddFriend';
import IcLogout from '../../assets/svg/IcLogout';
import IcGetOut from '../../assets/svg/IcGetOut';
import useDeleteAccount from '../../hooks/queries/myPage/useDeleteAccount';
import useResponseMessage from '../../hooks/common/useResponseMessage';

const MyPage = () => {
  const { data: userData } = useGetUser();
  const navigate = useNavigate();
  const { mutate: deleteAccount } = useDeleteAccount();
  const handleNavigate = () => {
    navigate('/');
  };
  const { setMessage, openModal, renderModal } =
    useResponseMessage(handleNavigate);

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
      icon: <IcGetOut />,
      action: () => {
        deleteAccount(
          {},
          {
            onSuccess: (data) => {
              setMessage(data.message);
              openModal();
            },
          },
        );
      },
    },
  ];
  return (
    <S.MyPageLayout>
      {renderModal()}
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
