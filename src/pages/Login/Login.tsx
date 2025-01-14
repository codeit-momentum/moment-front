import * as S from './Login.style';
import IcKakaoLogin from '../../assets/svg/IcKakaoLogin';

const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
