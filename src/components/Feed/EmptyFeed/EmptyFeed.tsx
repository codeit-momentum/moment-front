import { ReactNode } from 'react';
import * as S from './EmptyFeed.style';
import Button from '../../Button/Button';

interface EmptyFeedProps {
  type: 'friend' | 'feed';
  children: ReactNode;
  icon: ReactNode;
}

const EmptyFeed = ({ type, children, icon }: EmptyFeedProps) => {
  return (
    <S.EmptyFeedLayout>
      <S.EmptyFeedTitleBox>{children}</S.EmptyFeedTitleBox>
      <S.EmptyFeedIcon>{icon}</S.EmptyFeedIcon>
      <Button
        $customstyle={{
          width: '13rem',
          backgroundColor: type === 'friend' ? '#6A7CB7' : '#FAED46', // type에 따른 스타일
          color: type === 'friend' ? '#FCFCFC' : '#020202',
        }}
      >
        {type === 'friend' ? '친구 추가하기' : '노크하기'}
      </Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
