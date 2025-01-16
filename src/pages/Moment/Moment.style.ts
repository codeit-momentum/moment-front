import styled from 'styled-components';

export const MomentLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  gap: 3.8rem;
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
`;

export const MomentWrapper = styled.div``;
