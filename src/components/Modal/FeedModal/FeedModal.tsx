import * as S from './FeedModal.style';
import IcCloseModal from '../../../assets/svg/IcCloseModal';

interface FeedModalProps {
  title: string;
  onFix: () => void;
  onClose: () => void;
}

const FeedModal = ({ title, onFix, onClose }: FeedModalProps) => {
  return (
    <S.FeedModalLayout>
      <S.ModalHeader>
        <S.ModalTitle>
          <span>{title}</span>님
        </S.ModalTitle>
        <S.ModalCloseButton onClick={onClose}>
          <IcCloseModal />
        </S.ModalCloseButton>
      </S.ModalHeader>
      <S.ModalOptionContainer>
        <S.ModalOptionButton onClick={onFix}>
          친구 고정 on/off
        </S.ModalOptionButton>
        <S.ModalOptionButton>친구 삭제하기</S.ModalOptionButton>
      </S.ModalOptionContainer>
    </S.FeedModalLayout>
  );
};

export default FeedModal;
