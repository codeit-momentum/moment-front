import styled from 'styled-components';
export {
  OnboardingContainer,
  LogoWrapper,
  DescriptionWrapper,
  BoldSpan,
} from '../Start/Start.style';

export const LoginPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  height: 100vh;
  background-color: rgb(208, 200, 200);
`;

export const LoginButton = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-start' })};
  width: 19.6875rem;
  height: 3.4375rem;
  flex-shrink: 0;
`;
