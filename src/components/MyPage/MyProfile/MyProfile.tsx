import * as S from './MyProfile.style';

interface MyProfileProps {
  name: string;
  email?: string;
  profileImage?: string;
}

const MyProfile = ({ name, email, profileImage }: MyProfileProps) => {
  return (
    <S.MyProfileLayout>
      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} alt={`${name}님의 프로필`} />
        <S.UserInfoContainer>
          <S.NicknameSpan>
            {name === '로그인' ? (
              '로그인'
            ) : (
              <>
                <span>{name}</span>님
              </>
            )}
          </S.NicknameSpan>
          <S.EmailSpan>{email}</S.EmailSpan>
        </S.UserInfoContainer>
      </S.ProfileContainer>
    </S.MyProfileLayout>
  );
};

export default MyProfile;
