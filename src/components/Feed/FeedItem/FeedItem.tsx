import * as S from './FeedItem.style';
import IcHello from '../../../assets/svg/IcHello';
import usePostCheer from '../../../hooks/queries/Feed/usePostCheer';
import useResponseMessage from '../../../hooks/common/useResponseMessage';

interface FeedItemProps {
  friendId: string;
  momentId: string;
  name: string;
  content: string;
  date: string;
  image: string;
}

const FeedItem = ({
  friendId,
  momentId,
  name,
  content,
  date,
  image,
}: FeedItemProps) => {
  const { mutate: postCheer } = usePostCheer();
  const { handleError, setMessage, openModal, renderModal } =
    useResponseMessage();

  const handleCheer = () => {
    postCheer(
      { momentId, friendId },
      {
        onSuccess: (data) => {
          setMessage(data.message);
        },
        onError: (error) => {
          handleError(error);
        },
        onSettled: () => {
          openModal();
        },
      },
    );
  };

  return (
    <S.FeedItemLayout>
      {renderModal()}
      <S.FeedInfoContainer>
        <S.FeedTitleParagraph>
          <span>{name}</span> 님이
        </S.FeedTitleParagraph>
        <S.FeedContentParagraph>
          {content}
          <br />
          목표를 유지중이에요!
        </S.FeedContentParagraph>
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
