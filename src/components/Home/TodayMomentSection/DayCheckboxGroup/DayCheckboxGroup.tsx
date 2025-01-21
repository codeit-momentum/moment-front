import * as S from './DayCheckboxGroup.style';
import CheckIcon from '../../../../assets/svg/CheckIcon';

const DayCheckboxGroup = ({
  days,
}: {
  days: { day: string; isChecked: boolean }[];
}) => {
  return (
    <S.DayCheckboxGroupWrapper>
      {/* 요일 텍스트 렌더링 */}
      <S.DayTextRow>
        {days.map((day, index) => (
          <S.DayText key={`day-text-${index}`}>{day.day}</S.DayText>
        ))}
      </S.DayTextRow>

      {/* 체크박스 렌더링 */}
      <S.DayCheckboxRow>
        {days.map((day, index) => (
          <S.DayCheckbox
            key={`day-checkbox-${index}`}
            $isChecked={day.isChecked}
          >
            {day.isChecked && <CheckIcon />} {/* true일 때만 아이콘 렌더링 */}
          </S.DayCheckbox>
        ))}
      </S.DayCheckboxRow>
    </S.DayCheckboxGroupWrapper>
  );
};

export default DayCheckboxGroup;
