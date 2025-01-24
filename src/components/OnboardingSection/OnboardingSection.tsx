import * as S from './OnboardingSection.style';

const OnboardingSection = () => {
  return (
    <S.OnboardingContainer>
      <S.LogoWrapper />
      <S.DescriptionWrapper>
        당신의 중요한 <S.BoldSpan>모멘트</S.BoldSpan>를
        <br />
        기록하고, 달성하세요.
      </S.DescriptionWrapper>
    </S.OnboardingContainer>
  );
};

export default OnboardingSection;
