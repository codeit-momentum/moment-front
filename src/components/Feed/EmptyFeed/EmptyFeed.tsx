import { ReactNode } from 'react';
import * as S from './EmptyFeed.style';

interface EmptyFeedProps {
  title: string;
  image: ReactNode;
  buttonLabel: string;
}

const EmptyFeed = ({ title, image, buttonLabel }: EmptyFeedProps) => {
  return (
    <S.EmptyFeedLayout>
      <S.EmptyFeedTitleBox>{title}</S.EmptyFeedTitleBox>
      {image}
      <S.Button>{buttonLabel}</S.Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
