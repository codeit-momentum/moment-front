import styled from 'styled-components';

export const ModalOverlay = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
`;
