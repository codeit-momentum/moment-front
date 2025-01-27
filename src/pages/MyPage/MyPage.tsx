import * as S from './MyPage.style';
import mockImage from '../../assets/images/mockImage.jpg';
import { useNavigate } from 'react-router-dom';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import MyMenu from '../../components/MyPage/MyMenu/MyMenu';
import useGetUser from '../../hooks/queries/myPage/useGetUser';

const MyPage = () => {
  //내 정보 fetch
  const data = useGetUser();
  console.log(data);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: '내 정보 수정하기',
      name: 'edit',
      icon: '',
      action: () => {
        navigate('edit');
      },
    },
    {
      label: '친구 추가하기',
      name: 'friend',
      icon: '',
      action: () => {
        navigate('friend');
      },
    },
    {
      label: '로그아웃',
      name: 'logout',
      icon: '',
      action: () => {},
    },
    {
      label: '회원탈퇴',
      name: 'cancel',
      icon: '',
      action: () => {},
    },
  ];
  return (
    <S.MyPageLayout>
      <MyProfile
        name={data?.nickname}
        email={data?.email}
        profileImage={data?.profileImageUrl}
      />
      <S.Horizontal />
      <MyMenu menuItems={menuItems} />
    </S.MyPageLayout>
  );
};

export default MyPage;
