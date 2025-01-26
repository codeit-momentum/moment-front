import styled from 'styled-components';

export const FeedListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 33.5rem;
  gap: 1.5rem;
  padding-top: 18rem;
`;
