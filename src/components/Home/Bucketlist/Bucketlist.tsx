import * as S from './Bucketlist.style';
import useGetBucketAchievement from '../../../hooks/queries/home/useGetBucketAchievement';

interface AcheivementType {
  id: number;
  range: string;
  image: string;
  min: number;
  max: number;
}

const Bucketlist = () => {
  // React Query 훅을 이용해 API 데이터 가져오기
  const { data } = useGetBucketAchievement();
  const achievement = Number(data.completionRate);

  const bucketListData = [
    { id: 1, range: '0~19%', image: '/path/to/image1.png', min: 1, max: 19 },
    { id: 2, range: '20~39%', image: '/path/to/image2.png', min: 20, max: 39 },
    { id: 3, range: '40~59%', image: '/path/to/image3.png', min: 40, max: 59 },
    { id: 4, range: '60~79%', image: '/path/to/image4.png', min: 60, max: 79 },
    { id: 5, range: '80~100%', image: '/path/to/image5.png', min: 80, max: 99 },
    { id: 6, range: '100%', image: '/path/to/image6.png', min: 100, max: 100 },
  ];

  const currentBucket: AcheivementType = bucketListData.find(
    (item) => achievement >= item.min && achievement <= item.max,
  ) || { id: 0, range: '', image: '', min: 0, max: 0 };

  return (
    <S.BucketlistLayout>
      <S.BucketlistTitle>
        <span>{new Date().getFullYear()}</span> 버킷리스트 달성 현황
      </S.BucketlistTitle>
      <S.ImageContainer>
        <S.BucketlistLabel>{currentBucket.range}</S.BucketlistLabel>
        <S.BucketlistImage
          src={currentBucket.image}
          alt={currentBucket.range}
        />
      </S.ImageContainer>
    </S.BucketlistLayout>
  );
};

export default Bucketlist;
