import { ReactNode } from 'react';
import * as S from './EmptyFeed.style';
import Button from '../../Button/Button';

interface EmptyFeedProps {
  type: 'friend' | 'feed';
  children: ReactNode;
  icon: ReactNode;
  isKnocked?: boolean;
  onClick: () => void;
}

const EmptyFeed = ({
  type,
  children,
  icon,
  isKnocked,
  onClick,
}: EmptyFeedProps) => {
  return (
    <S.EmptyFeedLayout>
      <S.EmptyFeedTitleBox>{children}</S.EmptyFeedTitleBox>
      <S.EmptyFeedIcon>{icon}</S.EmptyFeedIcon>
      <Button
        disabled={isKnocked}
        $customstyle={{
          width: '13rem',
          backgroundColor: isKnocked
            ? '#D3D3D3'
            : type === 'friend'
              ? '#6A7CB7'
              : '#FAED46',
          color: isKnocked
            ? '#A9A9A9'
            : type === 'friend'
              ? '#FCFCFC'
              : '#020202',
        }}
        onClick={onClick}
      >
        {type === 'friend' ? '친구 추가하기' : '노크하기'}
      </Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
