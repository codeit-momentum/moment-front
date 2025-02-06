import MomentHeader from '../../components/Moment/MomentHeader/MomentHeader';
import MomentAchievementStatus from '../../components/Moment/MomentAchievementStatus/MomentAchievementStatus';
import MomentUploadStatus from '../../components/Moment/MomentUploadStatus/MomentUploadStatus';
import useGetChallengingMoment from '../../hooks/queries/moment/useGetChallengingMoment';
import * as S from './Moment.style';

const Moment = () => {
  const { data } = useGetChallengingMoment();

  return (
    <S.MomentLayout>
      <MomentHeader />
      <MomentAchievementStatus data={data.data} />
      <MomentUploadStatus data={data.data} />
    </S.MomentLayout>
  );
};

export default Moment;
