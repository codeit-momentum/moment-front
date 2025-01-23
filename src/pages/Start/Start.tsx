import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSection from '../../components/OnboardingSection/OnboardingSection';
import * as S from './Start.style';

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
    </S.StartPageLayout>
  );
};

export default Start;
