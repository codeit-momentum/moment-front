import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Start.style';
import OnboardingSection from '../../components/OnboardingSection/OnboardingSection';

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <S.StartPageLayout>
      <OnboardingSection />
      <S.LoginSpaceBox />
    </S.StartPageLayout>
  );
};

export default Start;
