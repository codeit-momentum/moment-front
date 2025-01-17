import * as S from './FeedList.style';
import FeedItem from '../FeedItem/FeedItem';
import EmptyFeed from '../EmptyFeed/EmptyFeed';
import IcAddFriend from '../../../assets/svg/IcAddFriend';
import mockImage from '../../../assets/images/mockImage.jpg';
import { FeedType } from '../../../types/feed';

interface FeedListProps {
  friendId: number | undefined;
}

const FeedList = ({ friendId }: FeedListProps) => {
  //api 로 리스트 fetch
  //친구 아이디를 props로 받아서 api 연결
  const feedListArray: FeedType[] = [
    {
      feedId: 1,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
    {
      feedId: 2,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
    {
      feedId: 3,
      name: '필수',
      content: '1주일에 1권\n독서하기 목표를\n 유지 중이에요!',
      date: '2025-01-01',
      image: mockImage,
    },
  ];

  console.log(friendId);

  return (
    <S.FeedListLayout>
      {
        //feedListArray가 비어있을 때 EmptyFeed 컴포넌트 렌더링
        feedListArray.length === 0 ? (
          <EmptyFeed title="친구들의 모멘트가 없어요" image={<IcAddFriend />} />
        ) : (
          feedListArray.map((feed) => (
            <FeedItem
              key={feed.feedId}
              name={feed.name}
              content={feed.content}
              date={feed.date}
              image={feed.image}
            />
          ))
        )
      }
    </S.FeedListLayout>
  );
};

export default FeedList;
