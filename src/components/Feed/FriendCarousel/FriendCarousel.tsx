import * as S from './FriendCarousel.style';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { FriendType } from '../../../types/feed';

interface FriendCarouselProps {
  friendList: FriendType[];
  currentFriendId: string | undefined;
  onClickFriend: (friendId: string) => void;
}

const FriendCarousel = ({
  friendList,
  currentFriendId,
  onClickFriend,
}: FriendCarouselProps) => {
  const option: EmblaOptionsType = { dragFree: true };
  const [emblaRef] = useEmblaCarousel(option);

  const isClick = (id: string) => {
    return currentFriendId === id;
  };

  return (
    <S.FriednCarouselLayout>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {friendList.map((friend: FriendType) => (
            <S.FriendItem
              key={friend.userID}
              onClick={() => onClickFriend(friend.userID)}
            >
              <S.FriendProfileImage
                src={friend.profileImageUrl}
                alt={`${friend.nickname}님의 프로필`}
                $isClicked={isClick(friend.userID)}
                $isFixed={friend.isFixed}
              />
              {friend.nickname}
            </S.FriendItem>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>
    </S.FriednCarouselLayout>
  );
};

export default FriendCarousel;
