import { CheckListVariant } from '../../../types/moment';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
import * as S from './CheckListModal.style';

interface CheckListModalProps {
  variant: CheckListVariant;
  title: string;
  onEdit: () => void;
  onClose: () => void;
}

const CheckListModal = ({
  variant,
  title,
  onEdit,
  onClose,
}: CheckListModalProps) => {
  return (
    <S.CheckListModalLayout>
      <S.ModalHeader>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalCloseButton onClick={onClose}>
          <IcCloseModal />
        </S.ModalCloseButton>
      </S.ModalHeader>
      <S.ModalOptionContainer>
        <S.ModalOptionButton>나만의 모멘트 생성</S.ModalOptionButton>
        {variant === '달성형' && (
          <S.ModalOptionButton>목표 달성 인증</S.ModalOptionButton>
        )}
        <S.ModalOptionButton onClick={onEdit}>수정하기</S.ModalOptionButton>
        <S.ModalOptionButton>삭제하기</S.ModalOptionButton>
      </S.ModalOptionContainer>
    </S.CheckListModalLayout>
  );
};

export default CheckListModal;
