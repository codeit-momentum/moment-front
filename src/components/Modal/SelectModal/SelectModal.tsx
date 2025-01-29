import * as S from './SelectModal.style';
import React from 'react';

interface SelectModalProps {
  children: React.ReactNode;
  content: string;
  onClose: () => void;
  onSubmit: () => void;
}

const SelectModal = ({
  children,
  content,
  onClose,
  onSubmit,
}: SelectModalProps) => {
  return (
    <S.SelectModalLayout>
      <S.InfoContainer>
        <S.ModalTitle>{children}</S.ModalTitle>
        <S.ModalContent>{content}</S.ModalContent>
      </S.InfoContainer>
      <S.SelectContainer>
        <S.SelectButton onClick={onSubmit}>네</S.SelectButton>
        <S.SelectButton onClick={onClose}>아니오</S.SelectButton>
      </S.SelectContainer>
    </S.SelectModalLayout>
  );
};

export default SelectModal;
