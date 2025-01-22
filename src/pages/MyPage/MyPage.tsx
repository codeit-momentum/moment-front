import * as S from './MyPage.style';
import mockImage from '../../assets/images/mockImage.jpg';

const MyPage = () => {
  //내 정보 fetch
  const user = {
    userId: 1,
    name: '필수',
    email: 'example@example.com',
    profileImage: mockImage,
  };
  const navItems = [
    {
      label: '내 정보 수정하기',
      name: 'edit',
      icon: '',
      action: '',
    },
    {
      label: '친구 추가하기',
      name: 'friend',
      icon: '',
      action: '',
    },
    {
      label: '로그아웃',
      name: 'logout',
      icon: '',
      action: '',
    },
    {
      label: '회원탈퇴',
      name: 'cancel',
      icon: '',
      action: '',
    },
  ];
  return (
    <S.MyPageLayout>
      <S.ProfileContainer>
        <S.ProfileImage
          src={user.profileImage}
          alt={`${user.name}님의 프로필`}
        />
        <S.UserInfoContainer>
          <S.NicknameSpan>
            <span>{user.name}</span>님
          </S.NicknameSpan>
          <S.EmailSpan>{user.email}</S.EmailSpan>
        </S.UserInfoContainer>
        <S.Horizontal />
      </S.ProfileContainer>
      <S.MyPageList>
        {navItems.map((navItem) => (
          <S.MyPageItem key={navItem.label}>
            <S.Icon />
            <S.ItemLabelSpan>{navItem.label}</S.ItemLabelSpan>
            <S.BtnNavigate />
          </S.MyPageItem>
        ))}
      </S.MyPageList>
    </S.MyPageLayout>
  );
};

export default MyPage;
