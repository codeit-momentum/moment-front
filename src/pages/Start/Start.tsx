import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../apis/client';
import OnboardingSection from '../../components/OnboardingSection/OnboardingSection';
import * as S from './Start.style';

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // access 토큰이 있는 경우 홈페이지로 리다이렉트
      if (getAccessToken()) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    }, 4800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.StartPageLayout>
      <OnboardingSection isStart />
    </S.StartPageLayout>
  );
};

export default Start;
