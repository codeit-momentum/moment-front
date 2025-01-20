import styled from 'styled-components';

export const BucketListLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  gap: 5rem;
  padding: 2rem;
  padding-bottom: 7.7rem;
`;
