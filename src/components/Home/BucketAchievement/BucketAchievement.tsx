import * as S from './BucketAchievement.style';
import AchievementImage from './AchievementImage/AchievementImage';

const BucketAchievement = () => {
  return (
    <S.BucketlistLayout>
      <S.BucketlistTitle>
        <span>{new Date().getFullYear()}</span>
      </S.BucketlistTitle>
      <S.ImageContainer>
        <AchievementImage />
      </S.ImageContainer>
    </S.BucketlistLayout>
  );
};

export default BucketAchievement;
