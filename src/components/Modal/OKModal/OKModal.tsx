import { ReactNode } from 'react';
import * as S from './OKModal.style';

interface OKModalProps {
  title?: string;
  children: ReactNode;
  subText?: string;
  onClose: () => void;
}

const OKModal = ({ title, children, subText, onClose }: OKModalProps) => {
  return (
    <S.OKModalLayout>
      <S.ModalHeader>
        <span>
          <S.TitleSpan>{title}</S.TitleSpan>
          {children}
        </span>
        {subText && <S.SubTextSpan>{subText}</S.SubTextSpan>}
      </S.ModalHeader>
      <S.OKButton onClick={onClose}>확인</S.OKButton>
    </S.OKModalLayout>
  );
};
export default OKModal;
