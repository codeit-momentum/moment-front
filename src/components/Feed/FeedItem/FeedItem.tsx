import * as S from './FeedItem.style';
import IcHello from '../../../assets/svg/IcHello';
import usePostCheer from '../../../hooks/queries/Feed/usePostCheer';
import useResponseMessage from '../../../hooks/common/useResponseMessage';
import IcHelloOff from '../../../assets/svg/IcHelloOff';
import { useQueryClient } from '@tanstack/react-query';

interface FeedItemProps {
  friendId: string;
  momentId: string;
  name: string;
  content: string;
  date: string;
  image: string;
  cheered: boolean;
  frequency: string;
}

const FeedItem = ({
  friendId,
  momentId,
  name,
  content,
  date,
  image,
  cheered,
  frequency,
}: FeedItemProps) => {
  const { mutate: postCheer } = usePostCheer();
  const { handleError, setMessage, openModal, renderModal } =
    useResponseMessage();
  const queryClient = useQueryClient();

  const handleCheer = () => {
    postCheer(
      { momentId, friendId },
      {
        onSuccess: (data) => {
          setMessage(data.message);
          queryClient.invalidateQueries({
            queryKey: ['feed', friendId],
          });
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
          {frequency}
          <br />
          {content}
          <br />
          목표를 유지중이에요!
        </S.FeedContentParagraph>
      </S.FeedInfoContainer>
      <S.FeedImageContainer>
        <S.IconWrapper onClick={handleCheer} disabled={cheered}>
          {cheered ? <IcHelloOff /> : <IcHello />}
        </S.IconWrapper>
        <S.FeedImage src={image} alt={name} />
        <S.DateBox>{date}</S.DateBox>
      </S.FeedImageContainer>
    </S.FeedItemLayout>
  );
};

export default FeedItem;
