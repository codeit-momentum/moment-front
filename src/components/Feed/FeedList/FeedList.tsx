import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import mockImage from '../../../assets/images/mockImage.jpg';

const FeedList = () => {
  //api 로 리스트 fetch
  const feedListArray = [
    {
      id: 1,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
    {
      id: 2,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
    {
      id: 3,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
  ];
  return (
    <S.FeedListLayout>
      {feedListArray.map((feed) => (
        <FeedItem
          key={feed.id}
          name={feed.name}
          content={feed.content}
          date={feed.date}
          image={feed.image}
        />
      ))}
    </S.FeedListLayout>
  );
};

export default FeedList;
