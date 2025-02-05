import styled from 'styled-components';

export const FeedListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 33.5rem;
  max-height: 100%;
  gap: 1.5rem;
  padding-top: 17rem;
`;
