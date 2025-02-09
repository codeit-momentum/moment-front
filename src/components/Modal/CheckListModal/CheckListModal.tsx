import { BucketType } from '../../../types/moment';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
import * as S from './CheckListModal.style';
import useGetChallengingCount from '../../../hooks/queries/moment/useGetChallengingCount';
import { MAX_MOMENT_COUNT } from '../../../utils/moment';

interface CheckListModalProps {
  type: BucketType;
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
  const {
    data: { challengingCount },
  } = useGetChallengingCount();

  return (
    <S.CheckListModalLayout>
      <S.ModalHeader>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalCloseButton onClick={onClose}>
          <IcCloseModal />
        </S.ModalCloseButton>
      </S.ModalHeader>
      <S.ModalOptionContainer>
        {challengingCount < MAX_MOMENT_COUNT && (
          <S.ModalOptionButton onClick={onClickCreate}>
            나만의 모멘트 생성
          </S.ModalOptionButton>
        )}
        {type === 'ACHIEVEMENT' && (
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
