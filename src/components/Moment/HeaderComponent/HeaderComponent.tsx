import * as S from './HeaderComponent.style';
import IcActiveMoment from '../../../assets/svg/IcActiveMoment';
/**
 * Header Component Props
 * -title : 화면 상단의 주요 제목
 * -subtitle : 제목 아래의 표시될 부제목
 */

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onBackClick?: () => void;
}

/**
 * Header Component
 * -title과 subtitle을 받아 화면 상단에 제목과 부제목을 표시하는 컴포넌트
 */

const HeaderComponent = ({ title, subtitle }: HeaderProps) => {
  return (
    <S.HeaderLayout>
      <S.HeaderTitleContainer>
        <S.IconWrapper>
          <IcActiveMoment />
        </S.IconWrapper>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.HeaderTitleContainer>
      <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>
    </S.HeaderLayout>
  );
};
export default HeaderComponent;
