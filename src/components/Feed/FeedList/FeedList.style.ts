import styled from 'styled-components';

export const FeedListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 3rem;
`;
