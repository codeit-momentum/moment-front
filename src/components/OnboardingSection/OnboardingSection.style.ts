import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 3rem;
`;

export const DescriptionWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.48px;
`;
