import * as S from './Bucketlist.style';

const Bucketlist = ({ progress, year }: { progress: number; year: number }) => {
  const bucketListData = [
    { id: 1, range: '1~19%', image: '/path/to/image1.png', min: 1, max: 19 },
    { id: 2, range: '20~39%', image: '/path/to/image2.png', min: 20, max: 39 },
    { id: 3, range: '40~59%', image: '/path/to/image3.png', min: 40, max: 59 },
    { id: 4, range: '60~79%', image: '/path/to/image4.png', min: 60, max: 79 },
    { id: 5, range: '80~99%', image: '/path/to/image5.png', min: 80, max: 99 },
    { id: 6, range: '100%', image: '/path/to/image6.png', min: 100, max: 100 },
    { id: 7, range: '0%', image: '/path/to/image7.png', min: 0, max: 0 },
  ];

  // 현재 달성률에 해당하는 데이터
  const currentBucket = bucketListData.find(
    (item) => progress >= item.min && progress <= item.max,
  );

  return (
    <S.Container>
      <S.Title>{year} 버킷리스트 달성 현황</S.Title>
      <S.SingleImageContainer>
        {currentBucket ? (
          <>
            <S.Image src={currentBucket.image} alt={currentBucket.range} />
            <S.Label>{currentBucket.range}</S.Label>
          </>
        ) : (
          <S.NoDataMessage>해당 달성률의 데이터가 없습니다.</S.NoDataMessage>
        )}
      </S.SingleImageContainer>
    </S.Container>
  );
};

export default Bucketlist;
