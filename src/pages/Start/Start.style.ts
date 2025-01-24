import styled from 'styled-components';

export const StartPageLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 8rem;
  margin-top: 16.6rem;
`;
