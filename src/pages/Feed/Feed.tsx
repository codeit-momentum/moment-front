import EmptyFeed from '../../components/EmptyFeed/EmptyFeed';
import * as S from './Feed.style';

const Feed = () => {
  const mockFriends = [
    {
      id: 1,
      name: '필수',
    },
  ];

  return (
    <S.FeedLayout>
      <S.FeedHeaderContatiner>
        <S.FeedTitleHeader>친구들의 모멘트</S.FeedTitleHeader>
        {mockFriends.length > 0 && <S.MenuIcon>메뉴</S.MenuIcon>}
      </S.FeedHeaderContatiner>
      {mockFriends.length > 0 && (
        <EmptyFeed
          title="친구를 추가해서
        달성기록을 공유해보세요."
        />
      )}
    </S.FeedLayout>
  );
};

export default Feed;
