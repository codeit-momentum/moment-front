import styled from 'styled-components';

export const ModalOverlay = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  animation: modalFadeIn 200ms ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
`;
