import * as S from './OnboardingSection.style';
import IcLogo from '../../assets/svg/IcLogo';

const OnboardingSection = () => {
  return (
    <S.OnboardingContainer>
      <IcLogo />
      <S.DescriptionWrapper>
        당신의 중요한 모멘트를
        <br />
        기록하고, 달성하세요
      </S.DescriptionWrapper>
    </S.OnboardingContainer>
  );
};

export default OnboardingSection;
