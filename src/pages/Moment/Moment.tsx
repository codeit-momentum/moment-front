import MomentHeader from '../../components/Moment/MomentHeader/MomentHeader';
import MomentAchievementStatus from '../../components/Moment/MomentAchievementStatus/MomentAchievementStatus';
import MomentUploadStatus from '../../components/Moment/MomentUploadStatus/MomentUploadStatus';
import * as S from './Moment.style';
import useGetChallengingMoment from '../../hooks/queries/moment/useGetChallengingMoment';

const Moment = () => {
  const { data, isLoading } = useGetChallengingMoment();

  // 임시 구현
  if (!data || isLoading) return <div>로딩중 ...</div>;
  return (
    <S.MomentLayout>
      <MomentHeader />
      <MomentAchievementStatus data={data.data} />
      <MomentUploadStatus data={data.data} />
    </S.MomentLayout>
  );
};

export default Moment;
