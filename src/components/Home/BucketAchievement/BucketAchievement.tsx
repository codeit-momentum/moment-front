import * as S from './BucketAchievement.style';
import AchievementImage from './AchievementImage/AchievementImage';

const BucketAchievement = () => {
  return (
    <S.BucketlistLayout>
      <S.BucketlistTitleSpan>
        <span>{new Date().getFullYear()} </span>
        버킷리스트 달성 현황
      </S.BucketlistTitleSpan>
      <S.ImageContainer>
        <AchievementImage />
      </S.ImageContainer>
    </S.BucketlistLayout>
  );
};

export default BucketAchievement;
