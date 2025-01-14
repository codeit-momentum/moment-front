import styled from 'styled-components';

export const StartPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  height: 100vh;
  background-color: rgb(208, 200, 200);
`;

export const OnboardingContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
`;

// 디자인 완료 후 로고 파일로 대체
export const LogoWrapper = styled.div`
  width: 11.5625rem;
  height: 11.5625rem;
  flex-shrink: 0;
  margin-bottom: 3.19rem;
  background-color: gray;
`;

export const DescriptionWrapper = styled.div`
  width: 18.9375rem;
  height: 3.75rem;
  flex-shrink: 0;
  margin-bottom: 4.44rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.3125rem;
  letter-spacing: -0.02rem;
`;

export const BoldSpan = styled.span`
  font-weight: 800;
`;

export const LoginSpaceBox = styled.div`
  width: 19.6875rem;
  height: 3.4375rem;
  flex-shrink: 0;
`;
