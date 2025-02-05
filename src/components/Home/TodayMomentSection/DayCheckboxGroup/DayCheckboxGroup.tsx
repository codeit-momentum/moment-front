import * as S from './DayCheckboxGroup.style';
import CheckIcon from '../../../../assets/svg/IcCheckboxCompleted';

// Props 인터페이스 선언
interface DayCheckboxGroupProps {
  days: DayProps[];
}

interface DayProps {
  day: string;
  isChecked: boolean;
}

const DayCheckboxGroup = ({ days }: DayCheckboxGroupProps) => {
  return (
    <S.DayCheckboxGroupLayout>
      {/* 요일 + 체크박스 Wrapper 렌더링 */}
      <S.DayWrapperList>
        {days.map((day) => (
          <S.DayWrapper key={`day-wrapper-${day.day}`}>
            <S.DayTextItem>{day.day}</S.DayTextItem>
            <S.DayCheckboxBox $isChecked={day.isChecked}>
              {day.isChecked && <CheckIcon />}
            </S.DayCheckboxBox>
          </S.DayWrapper>
        ))}
      </S.DayWrapperList>
    </S.DayCheckboxGroupLayout>
  );
};

export default DayCheckboxGroup;
