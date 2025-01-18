import styled from 'styled-components';

export const MomentLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  gap: 3.8rem;
  padding: 2rem;
  // GNB 높이
  padding-bottom: 7.7rem;
`;
