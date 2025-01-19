import IcCheer from '../../../assets/svg/IcCheer';
import * as S from './FeedItem.style';

interface FeedItemProps {
  name: string;
  content: string;
  date: string;
  image: string;
}

const FeedItem = ({ name, content, date, image }: FeedItemProps) => {
  return (
    <S.FeedItemLayout>
      <S.FeedInfoContainer>
        <S.FeedTitleParagraph>
          <span>{name}</span> 님이
        </S.FeedTitleParagraph>
        <S.FeedContentParagraph>{content}</S.FeedContentParagraph>
      </S.FeedInfoContainer>
      <S.FeedImageContainer>
        <S.IconWrapper>
          <IcCheer />
        </S.IconWrapper>
        <S.FeedImage src={image} alt={name} />
        <S.DateBox>{date}</S.DateBox>
      </S.FeedImageContainer>
    </S.FeedItemLayout>
  );
};

export default FeedItem;
