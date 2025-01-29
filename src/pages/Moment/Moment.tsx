import MomentHeader from '../../components/Moment/MomentHeader/MomentHeader';
import MomentAchievementStatus from '../../components/Moment/MomentAchievementStatus/MomentAchievementStatus';
import MomentUploadStatus from '../../components/Moment/MomentUploadStatus/MomentUploadStatus';
import * as S from './Moment.style';

const Moment = () => {
  return (
    <S.MomentLayout>
      <MomentHeader />
      <MomentAchievementStatus />
      <MomentUploadStatus />
    </S.MomentLayout>
  );
};

export default Moment;
