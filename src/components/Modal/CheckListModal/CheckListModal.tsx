import { CheckListType } from '../../../types/moment';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
import * as S from './CheckListModal.style';

interface CheckListModalProps {
  type: CheckListType;
  title: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickCreate: () => void;
  onClickUpload: () => void;
  onClose: () => void;
}

const CheckListModal = ({
  type,
  title,
  onClickEdit,
  onClickDelete,
  onClickCreate,
  onClickUpload,
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
        <S.ModalOptionButton onClick={onClickCreate}>
          나만의 모멘트 생성
        </S.ModalOptionButton>
        {type === '달성형' && (
          <S.ModalOptionButton onClick={onClickUpload}>
            목표 달성 인증
          </S.ModalOptionButton>
        )}
        <S.ModalOptionButton onClick={onClickEdit}>
          수정하기
        </S.ModalOptionButton>
        <S.ModalOptionButton onClick={onClickDelete}>
          삭제하기
        </S.ModalOptionButton>
      </S.ModalOptionContainer>
    </S.CheckListModalLayout>
  );
};

export default CheckListModal;
