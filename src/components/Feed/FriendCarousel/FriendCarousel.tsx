import * as S from './FriendCarousel.style';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

const FriendCarousel = () => {
  //api 연결해서 fetch 해오기
  const friendList = [
    {
      id: 1,
      name: '필수',
    },
    {
      id: 2,
      name: '도희',
    },
    {
      id: 3,
      name: '지윤',
    },
    {
      id: 4,
      name: '가연',
    },
    {
      id: 5,
      name: '윤지',
    },
    {
      id: 6,
      name: '주희',
    },
  ];

  const option: EmblaOptionsType = { dragFree: true };
  const [emblaRef] = useEmblaCarousel(option);
  return (
    <S.FriednCarouselLayout>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {friendList.map((friend) => (
            <S.FriendItem key={friend.id}>{friend.name}</S.FriendItem>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>
    </S.FriednCarouselLayout>
  );
};

export default FriendCarousel;
