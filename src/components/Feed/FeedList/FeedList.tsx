import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import mockImage from '../../../assets/images/mockImage.jpg';

interface FeedListProps {
  friendId: number;
}

const FeedList = ({ friendId }: FeedListProps) => {
  //api 로 리스트 fetch
  //친구 아이디를 props로 받아서 api 연결
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

  console.log(friendId);

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
