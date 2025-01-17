import * as S from './FriendCarousel.style';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { FriendType } from '../../../types/feed';

interface FriendCarouselProps {
  friendList: FriendType[];
  currentFriendId: number;
  onClickFriend: (friendId: number) => void;
}

const FriendCarousel = ({
  friendList,
  currentFriendId,
  onClickFriend,
}: FriendCarouselProps) => {
  const option: EmblaOptionsType = { dragFree: true };
  const [emblaRef] = useEmblaCarousel(option);

  const isClick = (id: number) => {
    return currentFriendId === id;
  };

  return (
    <S.FriednCarouselLayout>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {friendList.map((friend: FriendType) => (
            <S.FriendItem
              key={friend.friendId}
              onClick={() => onClickFriend(friend.friendId)}
            >
              <S.FriendProfileImage
                src={friend.image}
                alt={`${friend.name}님의 프로필`}
                $isClicked={isClick(friend.friendId)}
              />
              {friend.name}
            </S.FriendItem>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>
    </S.FriednCarouselLayout>
  );
};

export default FriendCarousel;
