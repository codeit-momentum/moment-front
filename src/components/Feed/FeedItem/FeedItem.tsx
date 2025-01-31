import * as S from './FeedItem.style';
import IcHello from '../../../assets/svg/IcHello';
import usePostCheer from '../../../hooks/queries/Feed/usePostCheer';

interface FeedItemProps {
  feedId: string;
  name: string;
  content: string;
  date: string;
  image: string;
}

const FeedItem = ({ feedId, name, content, date, image }: FeedItemProps) => {
  const { mutate: postCheer } = usePostCheer();

  const handleCheer = () => {
    postCheer(feedId, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  return (
    <S.FeedItemLayout>
      <S.FeedInfoContainer>
        <S.FeedTitleParagraph>
          <span>{name}</span> 님이
        </S.FeedTitleParagraph>
        <S.FeedContentParagraph>{content}</S.FeedContentParagraph>
      </S.FeedInfoContainer>
      <S.FeedImageContainer>
        <S.IconWrapper onClick={handleCheer}>
          <IcHello />
        </S.IconWrapper>
        <S.FeedImage src={image} alt={name} />
        <S.DateBox>{date}</S.DateBox>
      </S.FeedImageContainer>
    </S.FeedItemLayout>
  );
};

export default FeedItem;
