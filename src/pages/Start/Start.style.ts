import styled from 'styled-components';

export const StartPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  margin-top: 14rem;
`;
