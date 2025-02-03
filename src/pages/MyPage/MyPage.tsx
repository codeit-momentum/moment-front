import * as S from './MyPage.style';
import { useNavigate } from 'react-router-dom';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import MyMenu from '../../components/MyPage/MyMenu/MyMenu';
import UserInfoContext from '../../store/User/UserContext';
import { useContext, useEffect } from 'react';
import useGetUser from '../../hooks/queries/myPage/useGetUser';
import IcEditProfile from '../../assets/svg/IcEditProfile';
import IcAddFriend from '../../assets/svg/IcAddFriend';
import IcLogout from '../../assets/svg/IcLogout';
import IcGetOut from '../../assets/svg/IcGetOut';

const MyPage = () => {
  //내 정보 fetch
  const { data } = useGetUser();
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  useEffect(() => {
    if (data) {
      const userData = {
        id: data.id,
        nickname: data.nickname,
        email: data.email,
        friendCode: data.friendCode,
        profileImage: data.profileImageUrl,
      };
      setUserInfo(userData);
    }
  }, [data, setUserInfo]);
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
      action: () => {},
    },
    {
      label: '회원탈퇴',
      name: 'cancel',
      icon: <IcGetOut />,
      action: () => {},
    },
  ];
  return (
    <S.MyPageLayout>
      <MyProfile
        name={userInfo.nickname}
        email={userInfo.email}
        profileImage={userInfo.profileImage}
      />
      <S.Horizontal />
      <MyMenu menuItems={menuItems} />
    </S.MyPageLayout>
  );
};

export default MyPage;
