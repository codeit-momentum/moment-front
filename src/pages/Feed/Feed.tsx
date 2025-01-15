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
    </S.FeedLayout>
  );
};

export default Feed;
