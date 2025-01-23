import { useNavigationType, useNavigate } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../types/modeType';
import IcBack from '../../assets/svg/IcBack';
import IcActiveMoment from '../../assets/svg/IcActiveMoment';
import Button from '../../components/Button/Button';
/**
 * SelectMode
 * - 자동/수동 모드를 선택하는 페이지
 * - 선택된 모드에 따라 다음페이지로 이동
 */
const SelectMode = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  /**
   * handleSelect
   * - 선택된 모드에 따라 경로 이동
   */
  const handleSelect = (mode: ModeType) => {
    navigate(`/create-moment?mode=${mode}`); //Query String으로 mode 전달
  };

  // 이전 페이지가 moment 페이지인가..?
  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate('/moment');
    } else {
      navigate(-1);
    }
  };
  return (
    <S.SelectModeLayout>
      <S.SelectModeBackBtn onClick={handleBack}>
        <IcBack />
      </S.SelectModeBackBtn>
      <S.ContentContainer>
        <S.SelectModeTitleContainer>
          <S.IconWrapper>
            <IcActiveMoment />
          </S.IconWrapper>
          <S.SelectModeTitle>목도리 뜨기</S.SelectModeTitle>
        </S.SelectModeTitleContainer>
        <S.SelectModeSubtitle>
          모멘트 생성 방법을 골라주세요...
        </S.SelectModeSubtitle>
        <S.BtnContainer>
          <Button
            customStyle={{
              width: '22rem',
              height: '5rem',
              backgroundColor: '#020202',
              border: '3px solid #6A7CB7',
              color: '#FCFCFC',
            }}
            onClick={() => handleSelect('auto')}
          >
            <S.BtnHighlightedText color="#6A7CB7">자동</S.BtnHighlightedText>
            으로 생성할게요
          </Button>
          <Button
            customStyle={{
              width: '22rem',
              height: '5rem',
              backgroundColor: '#020202',
              border: '3px solid #FAED46',
              color: '#FCFCFC',
            }}
            onClick={() => handleSelect('manual')}
          >
            <S.BtnHighlightedText color="#FAED46">수동</S.BtnHighlightedText>
            으로 생성할게요
          </Button>
        </S.BtnContainer>
      </S.ContentContainer>
    </S.SelectModeLayout>
  );
};
export default SelectMode;
