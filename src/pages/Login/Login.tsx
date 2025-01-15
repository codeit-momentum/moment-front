import * as S from './Login.style';
import IcKakaoLogin from '../../assets/svg/IcKakaoLogin';
import { KAKAO_AUTH_URL } from '../../utils/login';

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.LoginPageLayout>
      <S.OnboardingContainer>
        <S.LogoWrapper />
        <S.DescriptionWrapper>
          당신의 중요한 <S.BoldSpan>모멘트</S.BoldSpan>를
          <br />
          기록하고, 달성하세요.
        </S.DescriptionWrapper>
        <S.LoginButton onClick={handleLogin}>
          <IcKakaoLogin />
        </S.LoginButton>
      </S.OnboardingContainer>
    </S.LoginPageLayout>
  );
};

export default Login;
