//import { Component } from 'react';
import * as S from './EmptyFeed.style';

interface EmptyFeedProps {
  title: string;
  //image: Component;
}

const EmptyFeed = ({ title }: EmptyFeedProps) => {
  return (
    <S.EmptyFeedLayout>
      <S.EmptyFeedTitleBox>{title}</S.EmptyFeedTitleBox>
      <S.EmptyFeedImage />
      <S.Button>친구 추가하러가기</S.Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
