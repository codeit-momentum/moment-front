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
        {subText && <S.SubTextSpan>{subText}</S.SubTextSpan>}
      </S.ModalHeader>
      <S.OKButton onClick={onClose}>확인</S.OKButton>
    </S.OKModalLayout>
  );
};
export default OKModal;
