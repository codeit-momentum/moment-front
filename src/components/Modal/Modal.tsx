import React from 'react';
import * as S from './Modal.style';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <S.ModalOverlay>
      <S.ModalLayout>{children}</S.ModalLayout>
    </S.ModalOverlay>
  );
};

export default Modal;
