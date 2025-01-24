import { useNavigationType, useNavigate } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../types/modeType';
import Button from '../../components/Button/Button';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import BackBtn from '../../components/BackBtn/BackBtn';
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
    navigate(`/moment/create-moment?mode=${mode}`); //Query String으로 mode 전달
  };

  // 이전 페이지가 moment 페이지인가..?
  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate('/moment'); // POP 상태에서는 지정된 경로로 이동
    } else {
      navigate(-1); // 다른 상태에서는 이전 페이지로 이동
    }
  };
  return (
    <S.SelectModeLayout>
      <BackBtn onClick={handleBack} />
      {/* HeaderComponent 적용 */}
      <HeaderComponent
        title="목도리 뜨기"
        subtitle="모멘트 생성 방법을 골라주세요..."
        onBackClick={handleBack}
      />
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
    </S.SelectModeLayout>
  );
};
export default SelectMode;
