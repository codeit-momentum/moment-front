import * as S from './DayCheckList.style';
import CheckIcon from '../../../../assets/svg/moment/IcCheckboxCompleted';

interface DayCheckListProps {
  days: { date: string; isComplete: boolean }[];
}

const DayCheckList = ({ days }: DayCheckListProps) => {
  const formatDay = (date: string) => {
    return new Date(date).toLocaleDateString('ko-KR', { weekday: 'short' });
  };

  return (
    <S.DayCheckListLayout>
      {days.map((day) => (
        <S.CheckContainer key={day.date}>
          <S.DaySpan>{formatDay(day.date)}</S.DaySpan>
          <S.CheckBox $isChecked={day.isComplete}>
            {day.isComplete && <CheckIcon />}
          </S.CheckBox>
        </S.CheckContainer>
      ))}
    </S.DayCheckListLayout>
  );
};

export default DayCheckList;
