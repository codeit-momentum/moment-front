import styled from 'styled-components';

export const LoginPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 3rem;
  padding-top: 14rem;
`;

export const LoginButton = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-start' })};
  flex-shrink: 0;
`;
