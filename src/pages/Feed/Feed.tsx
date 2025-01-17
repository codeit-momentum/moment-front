import * as S from './Feed.style';
import { useState } from 'react';
import EmptyFeed from '../../components/Feed/EmptyFeed/EmptyFeed';
import IcAddFriend from '../../assets/svg/IcAddFriend';
import FriendCarousel from '../../components/Feed/FriendCarousel/FriendCarousel';
import FeedList from '../../components/Feed/FeedList/FeedList';
import image from '../../assets/images/mockImage.jpg';
import { FriendType } from './../../types/feed/index.d';

const Feed = () => {
  //페이지에서 친구 리스트 받아와야 데이터 다루기 편할 듯하다.
  const friendList: FriendType[] = [
    {
      friendId: 1,
      image: image,
      name: '필수',
    },
    {
      friendId: 2,
      image: image,
      name: '도희',
    },
    {
      friendId: 3,
      image: image,
      name: '지윤',
    },
    {
      friendId: 4,
      image: image,
      name: '가연',
    },
    {
      friendId: 5,
      image: image,
      name: '윤지',
    },
    {
      friendId: 6,
      image: image,
      name: '주희',
    },
  ];

  //현재 친구 id를 FeedList 에 전달
  const [currentFriend, setCurrentFriend] = useState<number>(
    friendList[0].friendId,
  );

  return (
    <S.FeedLayout>
      <S.FeedHeaderContatiner>
        <S.FeedTitleHeader>친구들의 모멘트</S.FeedTitleHeader>
        {friendList.length > 0 && <S.MenuIcon>메뉴</S.MenuIcon>}
      </S.FeedHeaderContatiner>
      <FriendCarousel
        friendList={friendList}
        currentFriendId={currentFriend}
        onClickFriend={setCurrentFriend}
      />
      {friendList.length === 0 ? (
        <EmptyFeed
          title="친구를 추가해서
        달성기록을 공유해보세요."
          image={<IcAddFriend />}
        />
      ) : (
        <FeedList friendId={currentFriend} />
      )}
    </S.FeedLayout>
  );
};

export default Feed;
