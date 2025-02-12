import * as S from './OnboardingSection.style';
import IcLogo from '../../assets/svg/IcLogo';

type OnboardingSectionProps = {
  isStart: boolean;
};

const OnboardingSection = ({ isStart }: OnboardingSectionProps) => {
  return (
    <S.OnboardingContainer>
      <S.OnboardingAnimation $isStart={isStart}>
        <IcLogo />
      </S.OnboardingAnimation>
      <S.DescriptionWrapper $isStart={isStart}>
        당신의 중요한 모멘트를
        <br />
        기록하고, 달성하세요
      </S.DescriptionWrapper>
    </S.OnboardingContainer>
  );
};

export default OnboardingSection;
