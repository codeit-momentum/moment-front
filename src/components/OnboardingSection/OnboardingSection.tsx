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
        모멘텀으로,
        <br />더 큰 성공을 향해 나아가세요
      </S.DescriptionWrapper>
    </S.OnboardingContainer>
  );
};

export default OnboardingSection;
