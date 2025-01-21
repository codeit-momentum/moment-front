import styled from 'styled-components';

export const FriednCarouselLayout = styled.div`
  max-width: 37.5rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
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
  gap: 3rem;
`;
export const FriendItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 6.1rem;
  flex-shrink: 0;
  gap: 1rem;
  transform: translate3d(0, 0, 0);
`;
export const FriendProfileImage = styled.img<{ $isClicked: boolean }>`
  width: 6rem;
  height: 6rem;
  border-radius: 310px;
  ${({ $isClicked }) =>
    $isClicked &&
    `
    border: 2px solid blue;
  `}
`;
