import MyProfile from '../../../components/MyPage/MyProfile/MyProfile';
import * as S from './MyPageLogin.style';
import mockImage from '../../../assets/images/mockImage.jpg';
import MyMenu from '../../../components/MyPage/MyMenu/MyMenu';

const MyPageLogin = () => {
  const menuItems = [
    {
      label: '로그인',
      name: 'login',
      icon: '',
      action: () => {},
    },
    {
      label: '회원가입',
      name: 'signup',
      icon: '',
      action: () => {},
    },
  ];

  return (
    <S.MyPageLoginLayout>
      <MyProfile name="로그인" profileImage={mockImage} />
      <S.Horizontal />
      <MyMenu menuItems={menuItems} />
    </S.MyPageLoginLayout>
  );
};
export default MyPageLogin;
