import * as S from './TodayMomentSection.style';
import DayCheckboxGroup from './DayCheckboxGroup/DayCheckboxGroup';
import MomentList, { MomentProps } from './MomentList/MomentList';
import useGetTodayMoments from '../../../hooks/queries/home/useGetTodayMoments';
import useGetWeekStatus from '../../../hooks/queries/home/useGetWeekStatus';

function TodayMomentSection() {
  const currentDate = new Date().toISOString().split('T')[0]; // 오늘 날짜
  const { data: todayData } = useGetTodayMoments(currentDate);
  const { data: weekData } = useGetWeekStatus(currentDate);

  // 데이터 기본값 설정
  const days =
    weekData?.weekStatus.map((day) => ({
      day: new Date(day.date).toLocaleDateString('ko-KR', { weekday: 'short' }),
      isChecked: day.isComplete,
    })) || [];

  const moments: MomentProps[] = (todayData?.moments || []).map((moment) => ({
    id: moment.momentID, // string으로 매핑
    title: moment.content,
    isCompleted: moment.isCompleted,
  }));

  const completedCount = todayData?.completedCount || 0;

  return (
    <S.TodayMomentLayout>
      <S.TopLeftArea />
      <S.TopRightArea />
      <S.BottomLeftArea />
      <S.BottomRightArea />

      <DayCheckboxGroup days={days} />
      <S.DividerLine />
      {moments.length > 0 && <MomentList moments={moments} />}
      <S.TodayMessageBox>
        오늘의 모멘트 총&nbsp;<span>{completedCount}</span>개 수집!
      </S.TodayMessageBox>
    </S.TodayMomentLayout>
  );
}

export default TodayMomentSection;
