import * as S from './HeaderComponent.style';
import IcBack from '../../../assets/svg/IcBack';
import IcActiveMoment from '../../../assets/svg/IcActiveMoment';
import { useNavigate, useNavigationType } from 'react-router-dom';
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

const HeaderComponent = ({ title, subtitle, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick(); // props로 전달받은 핸들러 실행
    } else if (navigationType === 'POP') {
      navigate('/moment'); // POP 상태에서는 지정된 경로로 이동
    } else {
      navigate(-1); // 다른 상태에서는 이전 페이지로 이동
    }
  };

  return (
    <S.HeaderLayout>
      <S.BackBtn onClick={handleBack}>
        <IcBack />
      </S.BackBtn>
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
