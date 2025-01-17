import styled from 'styled-components';

export const MomentLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  min-height: 100vh;
  gap: 3.8rem;
  padding: 2rem;
  // GNB 높이
  margin-bottom: 5.7rem;
`;
