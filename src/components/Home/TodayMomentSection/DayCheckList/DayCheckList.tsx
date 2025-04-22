import * as S from './DayCheckList.style';
import IcCheckboxCompleted from '../../../../assets/svg/moment/IcCheckboxCompleted';
import IcCheckboxPending from '../../../../assets/svg/moment/IcCheckboxPending';
import useGetWeekStatus from '../../../../hooks/queries/home/useGetWeekStatus';

const DayCheckList = () => {
  const { data: weekData } = useGetWeekStatus();
  const { weekStatus } = weekData;

  const formatDay = (date: string) => {
    return new Date(date).toLocaleDateString('ko-KR', { weekday: 'short' });
  };

  return (
    <S.DayCheckListLayout>
      {weekStatus.map((day) => (
        <S.CheckContainer key={day.date}>
          <S.DaySpan>{formatDay(day.date)}</S.DaySpan>
          {day.isComplete ? <IcCheckboxCompleted /> : <IcCheckboxPending />}
        </S.CheckContainer>
      ))}
    </S.DayCheckListLayout>
  );
};

export default DayCheckList;
