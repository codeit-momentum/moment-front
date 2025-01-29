import styled from 'styled-components';

export const FriednCarouselLayout = styled.div`
  max-width: 37.5rem;
  padding: 0 2rem 2rem;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 50%;
`;
export const EmblaViewport = styled.div`
  overflow: hidden;
`;
export const EmblaContainer = styled.div`
  display: flex;
  flex-direction: row;
  touch-action: pan-y pinch-zoom;
  gap: 2.5rem;
`;
export const FriendItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 5.4rem;
  height: 7rem;
  flex-shrink: 0;
  gap: 0.4rem;
  transform: translate3d(0, 0, 0);
  font-size: 12px;
`;
export const FriendProfileImage = styled.img<{ $isClicked: boolean }>`
  width: 5rem;
  height: 5rem;
  border-radius: 310px;
  ${({ theme, $isClicked }) =>
    $isClicked &&
    `
    outline: 2px solid ${theme.colors.blue};
  `}
`;
