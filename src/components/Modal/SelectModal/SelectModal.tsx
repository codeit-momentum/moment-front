import * as S from './SelectModal.style';

interface SelectModalProps {
  title: string;
  content: string;
  onClose: () => void;
  onSubmit: () => void;
}

const SelectModal = ({
  title,
  content,
  onClose,
  onSubmit,
}: SelectModalProps) => {
  return (
    <S.SelectModalLayout>
      <S.InfoContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalContent>{content}</S.ModalContent>
      </S.InfoContainer>
      <S.SelectContainer>
        <S.SelectButton
          onClick={() => {
            onClose();
          }}
        >
          아니오
        </S.SelectButton>
        <S.SelectButton
          onClick={() => {
            onSubmit();
          }}
        >
          네
        </S.SelectButton>
      </S.SelectContainer>
    </S.SelectModalLayout>
  );
};

export default SelectModal;
