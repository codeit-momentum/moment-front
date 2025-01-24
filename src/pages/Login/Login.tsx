import OnboardingSection from '../../components/OnboardingSection/OnboardingSection';
import IcKakaoLogin from '../../assets/svg/IcKakaoLogin';
import { KAKAO_AUTH_URL } from '../../utils/login';
import * as S from './Login.style';

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.LoginPageLayout>
      <OnboardingSection />
      <S.LoginButton onClick={handleLogin}>
        <IcKakaoLogin />
      </S.LoginButton>
    </S.LoginPageLayout>
  );
};

export default Login;
