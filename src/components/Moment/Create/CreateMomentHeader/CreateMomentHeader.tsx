import * as S from './CreateMomentHeader.style';
import IcUnactiveMoment from '../../../../assets/svg/navigation/IcUnactiveMoment';

interface CreateMomentHeaderProps {
  title?: string;
  subtitle?: string;
}

const CreateMomentHeader = ({ title, subtitle }: CreateMomentHeaderProps) => {
  return (
    <S.HeaderLayout>
      <S.HeaderTitleContainer>
        <S.IconWrapper>
          <IcUnactiveMoment />
        </S.IconWrapper>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.HeaderTitleContainer>
      <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>
    </S.HeaderLayout>
  );
};
export default CreateMomentHeader;
