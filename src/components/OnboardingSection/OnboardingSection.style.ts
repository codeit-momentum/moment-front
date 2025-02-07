import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 5.1rem;
`;

// 디자인 완료 후 로고 파일로 대체
export const LogoWrapper = styled.div`
  width: 18.5rem;
  height: 18.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const DescriptionWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
  line-height: 37px;
`;

export const BoldSpan = styled.span`
  font-size: 26px;
`;
