import { useSearchParams } from 'react-router-dom';
import useLogin from '../../hooks/queries/useLogin';

const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  useLogin(code);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
