import styled from 'styled-components';

export const StartPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  height: 100vh;
  background-color: rgb(208, 200, 200);
`;

export const LoginSpaceBox = styled.div`
  width: 19.6875rem;
  height: 3.4375rem;
  flex-shrink: 0;
`;
