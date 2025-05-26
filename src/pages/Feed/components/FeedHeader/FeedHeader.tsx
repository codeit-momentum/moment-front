import * as S from './FeedHeader.style.ts';
import IcMenu from '../../../../assets/svg/feed/IcMenu';

const FeedHeader = () => {
  return (
    <S.FeedHeaderLayout>
      <S.FeedTitleContainer>
        <S.FeedTitleHeader>친구들의 모멘트</S.FeedTitleHeader>
        <S.IconWrapper>
          <IcMenu />
        </S.IconWrapper>
      </S.FeedTitleContainer>
    </S.FeedHeaderLayout>
  );
};

export default FeedHeader;
