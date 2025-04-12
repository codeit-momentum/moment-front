import * as S from './CurrentMoment.style';
import DayCheckList from './DayCheckList/DayCheckList';
import MomentList from './MomentList/MomentList';
import useGetTodayMoments from '../../../hooks/queries/home/useGetTodayMoments';
import useGetWeekStatus from '../../../hooks/queries/home/useGetWeekStatus';

const CurrentMoment = () => {
  const { data: todayData } = useGetTodayMoments();
  const { data: weekData } = useGetWeekStatus();

  // 데이터 기본값 설정
  const { completedCount } = todayData;
  const { weekStatus } = weekData;

  return (
    <S.TodayMomentLayout>
      <S.TopLeftArea />
      <S.TopRightArea />
      <S.BottomLeftArea />
      <S.BottomRightArea />

      <DayCheckList days={weekStatus} />
      <S.DividerLine />
      <MomentList moments={todayData.moments} />
      <S.SummaryBox>
        {todayData.moments.length === 0 ? (
          <>
            <span>새로운 모멘트</span>를 등록해보세요!
          </>
        ) : (
          <>
            오늘의 모멘트 총 <span>{completedCount}</span>개 수집!
          </>
        )}
      </S.SummaryBox>
    </S.TodayMomentLayout>
  );
};

export default CurrentMoment;
