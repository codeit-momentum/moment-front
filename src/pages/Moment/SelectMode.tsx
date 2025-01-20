import { useNavigate } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../types/modeType';

/**
 * SelectMode
 * - 자동/수동 모드를 선택하는 페이지
 * - 선택된 모드에 따라 다음페이지로 이동
 */
const SelectMode = () => {
  const navigate = useNavigate();

  /**
   * handleSelect
   * - 선택된 모드에 따라 경로 이동
   */
  const handleSelect = (mode: ModeType) => {
    navigate(`/moment?mode=${mode}`); //Query String으로 mode 전달
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.BackBtn onClick={handleBack}>
        <img
          src="/src/assets/images/mockBackIcon.png"
          alt="뒤로가기"
          width={24}
          height={24}
        />
      </S.BackBtn>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Header>목도리 뜨기</S.Header>
          <S.Subtitle>의 모멘트를 어떻게 생성할까요?</S.Subtitle>
        </S.TitleWrapper>
        <S.ButtonGroup>
          <S.SelectButton onClick={() => handleSelect('auto')}>
            <S.ButtonText>자동으로{'\n'}생성할게요</S.ButtonText>
            {/* 아이콘 추가 예정 */}
            <S.IconPlaceholder />
          </S.SelectButton>

          <S.SelectButton onClick={() => handleSelect('manual')}>
            <S.ButtonText>수동으로{'\n'}생성할게요</S.ButtonText>
            {/* 아이콘 추가 예정 */}
            <S.IconPlaceholder />
          </S.SelectButton>
        </S.ButtonGroup>
      </S.ContentWrapper>
    </S.Container>
  );
};
export default SelectMode;
