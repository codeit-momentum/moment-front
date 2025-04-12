import * as S from './BucketAchievement.style';
import useGetBucketAchievement from '../../../hooks/queries/home/useGetBucketAchievement';
import IcSnakeLv0 from '../../../assets/svg/home/IcSnakeLv0';
import { JSX } from 'react';
import IcSnakeLv1 from '../../../assets/svg/home/IcSnakeLv1';
import IcSnakeLv2 from '../../../assets/svg/home/IcSnakeLv2';
import IcSnakeLv3 from '../../../assets/svg/home/IcSnakeLv3';
import IcSnakeLv4 from '../../../assets/svg/home/IcSnakeLv4';

interface AcheivementType {
  id: number;
  image: JSX.Element;
  min: number;
  max: number;
}

const BucketAchievement = () => {
  const { data } = useGetBucketAchievement();
  const achievement = Number(data.completionRate);

  const bucketListData: AcheivementType[] = [
    { id: 1, image: <IcSnakeLv0 />, min: 0, max: 19 },
    { id: 2, image: <IcSnakeLv1 />, min: 20, max: 39 },
    { id: 3, image: <IcSnakeLv2 />, min: 40, max: 59 },
    { id: 4, image: <IcSnakeLv3 />, min: 60, max: 79 },
    { id: 5, image: <IcSnakeLv4 />, min: 80, max: 100 },
  ];

  const currentBucket: AcheivementType = bucketListData.find(
    (item) => achievement >= item.min && achievement <= item.max,
  ) || { id: 0, image: <IcSnakeLv0 />, min: 0, max: 0 };

  return (
    <S.BucketlistLayout>
      <S.BucketlistTitle>
        <span>{new Date().getFullYear()}</span> 버킷리스트 달성 현황
      </S.BucketlistTitle>
      <S.ImageContainer>
        <S.IconWrapper>{currentBucket.image}</S.IconWrapper>
      </S.ImageContainer>
    </S.BucketlistLayout>
  );
};

export default BucketAchievement;
