import * as S from './AchievementImage.style.ts';
import { JSX } from 'react';
import useGetBucketAchievement from '../../../../hooks/queries/home/useGetBucketAchievement';
import IcSnakeLv0 from '../../../../assets/svg/home/IcSnakeLv0';
import IcSnakeLv1 from '../../../../assets/svg/home/IcSnakeLv1';
import IcSnakeLv2 from '../../../../assets/svg/home/IcSnakeLv2';
import IcSnakeLv3 from '../../../../assets/svg/home/IcSnakeLv3';
import IcSnakeLv4 from '../../../../assets/svg/home/IcSnakeLv4';

interface AcheivementListType {
  image: JSX.Element;
  min: number;
  max: number;
}

const AchievementImage = () => {
  const { data } = useGetBucketAchievement();
  const achievement = Number(data.completionRate);

  const achievementList: AcheivementListType[] = [
    { image: <IcSnakeLv0 />, min: 0, max: 19.99 },
    { image: <IcSnakeLv1 />, min: 20, max: 39.99 },
    { image: <IcSnakeLv2 />, min: 40, max: 59.99 },
    { image: <IcSnakeLv3 />, min: 60, max: 79.99 },
    { image: <IcSnakeLv4 />, min: 80, max: 100 },
  ];

  const targetRange: AcheivementListType = achievementList.find(
    (item) => achievement >= item.min && achievement <= item.max,
  );

  return <S.Wrapper>{targetRange.image}</S.Wrapper>;
};

export default AchievementImage;
