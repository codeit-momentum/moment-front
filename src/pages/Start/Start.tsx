import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <S.OnboardingContainer>
        <S.LogoWrapper />
        <S.DescriptionWrapper>
          당신의 중요한 <S.BoldSpan>모멘트</S.BoldSpan>를
          <br />
          기록하고, 달성하세요.
        </S.DescriptionWrapper>
        <S.LoginSpaceBox />
      </S.OnboardingContainer>
    </S.StartPageLayout>
  );
};

export default Start;
