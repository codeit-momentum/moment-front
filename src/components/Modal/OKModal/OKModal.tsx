import * as S from './OKModal.style';

interface OKModalProps {
  title: string;
  mainText: string;
  subText?: string;
  onClose: () => void;
}

const OKModal = ({ title, mainText, subText, onClose }: OKModalProps) => {
  return (
    <S.OKModalLayout>
      <S.ModalHeader>
        <span>
          <S.TitleSpan>{title}</S.TitleSpan>
          {mainText}
        </span>
        {subText && (
          <S.SubTextSpan>새로운 버킷리스트를 달성했네요</S.SubTextSpan>
        )}
      </S.ModalHeader>
      <S.OKButton onClick={onClose}>확인</S.OKButton>
    </S.OKModalLayout>
  );
};
export default OKModal;
