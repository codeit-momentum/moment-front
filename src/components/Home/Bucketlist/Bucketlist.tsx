import * as S from './Bucketlist.style';

interface BucketlistProps {
  progress: number;
  year: number;
}

const Bucketlist = ({ progress, year }: BucketlistProps) => {
  const bucketListData = [
    { id: 1, range: '1~19%', image: '/path/to/image1.png', min: 1, max: 19 },
    { id: 2, range: '20~39%', image: '/path/to/image2.png', min: 20, max: 39 },
    { id: 3, range: '40~59%', image: '/path/to/image3.png', min: 40, max: 59 },
    { id: 4, range: '60~79%', image: '/path/to/image4.png', min: 60, max: 79 },
    { id: 5, range: '80~99%', image: '/path/to/image5.png', min: 80, max: 99 },
    { id: 6, range: '100%', image: '/path/to/image6.png', min: 100, max: 100 },
    { id: 7, range: '0%', image: '/path/to/image7.png', min: 0, max: 0 },
  ];

  const defaultBucket = { range: '0%', image: '/path/to/default-image.png' };

  const currentBucket =
    bucketListData.find(
      (item) => progress >= item.min && progress <= item.max,
    ) || defaultBucket;

  return (
    <S.BucketlistLayout>
      <S.BucketlistTitle>{year} 버킷리스트 달성 현황</S.BucketlistTitle>
      <S.ImageContainer>
        <S.BucketlistImage
          src={currentBucket.image}
          alt={currentBucket.range}
        />
        <S.BucketlistLabel>{currentBucket.range}</S.BucketlistLabel>
      </S.ImageContainer>
    </S.BucketlistLayout>
  );
};

export default Bucketlist;
