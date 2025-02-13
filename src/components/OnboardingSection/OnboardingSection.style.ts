import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 3rem;
`;

export const DescriptionWrapper = styled.div<{ $isStart: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.48px;

  opacity: ${({ $isStart }) => ($isStart ? '0' : '1')};
  animation: ${({ $isStart }) =>
    $isStart ? 'fadeIn 0.3s 3.2s forwards' : 'none'};
`;

export const OnboardingAnimation = styled.div<{ $isStart: boolean }>`
  animation: ${({ $isStart }) =>
    $isStart
      ? `fadeIn 0.3s forwards, slideToTop 1.2s 0.6s forwards, slideFromBottom 1.2s 2s forwards`
      : `none`};

  @keyframes fadeIn {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    100% {
      opacity: 1;
      animation-timing-function: ease-out;
    }
  }
  @keyframes slideToTop {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(-330px);
      animation-timing-function: ease-out;
    }
  }
  @keyframes slideFromBottom {
    0% {
      transform: translateY(calc(100vh - 14rem));
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;
