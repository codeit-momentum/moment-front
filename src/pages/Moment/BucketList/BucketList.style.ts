import styled from 'styled-components';

export const BucketListLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  margin-top: 8rem;
  gap: 2rem;
`;
