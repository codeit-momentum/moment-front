import MomentTabBar from '../../components/Moment/MomentTabBar/MomentTabBar';
import MomentAchievementStatus from '../../components/Moment/MomentAchievementStatus/MomentAchievementStatus';
import MomentUploadStatus from '../../components/Moment/MomentUploadStatus/MomentUploadStatus';
import * as S from './Moment.style';

const Moment = () => {
  return (
    <S.MomentLayout>
      <MomentTabBar />
      <MomentAchievementStatus />
      <MomentUploadStatus />
    </S.MomentLayout>
  );
};

export default Moment;
