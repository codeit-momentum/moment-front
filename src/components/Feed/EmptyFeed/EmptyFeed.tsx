import { ReactNode } from 'react';
import * as S from './EmptyFeed.style';

interface EmptyFeedProps {
  title: string;
  image: ReactNode;
}

const EmptyFeed = ({ title, image }: EmptyFeedProps) => {
  return (
    <S.EmptyFeedLayout>
      <S.EmptyFeedTitleBox>{title}</S.EmptyFeedTitleBox>
      {image}
      <S.Button>친구 추가하러가기</S.Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
