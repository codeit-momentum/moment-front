import * as S from './CurrentMoment.style';
import DayCheckList from './DayCheckList/DayCheckList';
import MomentList from './MomentList/MomentList';
import useGetTodayMoments from '../../../hooks/queries/home/useGetTodayMoments';

const CurrentMoment = () => {
  const { data: todayData } = useGetTodayMoments();
  const { completedCount, moments } = todayData;

  return (
    <S.TodayMomentLayout>
      <S.TopLeftArea />
      <S.TopRightArea />
      <S.BottomLeftArea />
      <S.BottomRightArea />

      <DayCheckList />
      <S.DividerLine />
      <MomentList moments={moments} />
      <S.SummaryBox>
        {moments.length === 0 ? (
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
