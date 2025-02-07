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
      {days.map((day) => (
        <S.DayWrapper key={`day-wrapper-${day.day}`}>
          <S.DayTextItem>{day.day}</S.DayTextItem>
          <S.DayCheckboxBox $isChecked={day.isChecked}>
            {day.isChecked && <CheckIcon />}
          </S.DayCheckboxBox>
        </S.DayWrapper>
      ))}
    </S.DayCheckboxGroupLayout>
  );
};

export default DayCheckboxGroup;
