import * as S from './Login.style';

const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Login = () => {
  const handleLogin = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <S.Container>
      <span>로그인 페이지</span>
      <S.KakaoLogin onClick={handleLogin}>카카오 로그인</S.KakaoLogin>
    </S.Container>
  );
};

export default Login;
