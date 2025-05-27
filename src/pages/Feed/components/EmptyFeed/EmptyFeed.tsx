import * as S from './EmptyFeed.style';
import Button from '../../../../components/buttons/Button';
import IcKnock from '../../../../assets/svg/feed/IcKnock';
import usePostKnock from '../../hooks/queries/usePostKnock';
import useModal from '../../../../hooks/common/useModal';
import Modal from '../../../../components/Modal/Modal';
import OKModal from '../../../../components/Modal/OKModal/OKModal';

interface EmptyFeedProps {
  friendId: string;
  friendNickname: string;
  isKnocked: boolean;
  setCurrentFriend: () => void;
}

const EmptyFeed = ({
  friendId,
  friendNickname,
  isKnocked,
  setCurrentFriend,
}: EmptyFeedProps) => {
  const { mutate: postKnock } = usePostKnock();
  const [isOpen, openModal, closeModal] = useModal();

  const handleKnock = () => {
    postKnock(friendId, {
      onSuccess: () => {
        openModal();
        setCurrentFriend((prev) => ({
          ...prev,
          isKnock: !prev.isKnock,
        }));
      },
      onError: () => {
        alert('에러 발생');
      },
    });
  };

  return (
    <S.EmptyFeedLayout>
      {isOpen && (
        <Modal>
          <OKModal
            title=""
            subText="피드를 곧 올려주실 거예요!"
            onClose={closeModal}
          >
            <S.HighlightSpan>{friendNickname}</S.HighlightSpan>님께
            노크하였습니다!
          </OKModal>
        </Modal>
      )}
      <S.EmptyFeedTitleBox>
        친구가 피드를 안 올리네요...
        <br /> <S.HighlightSpan>노크를 해서 </S.HighlightSpan>
        재촉해보세요!
      </S.EmptyFeedTitleBox>
      <S.EmptyFeedIcon>
        <IcKnock />
      </S.EmptyFeedIcon>
      <Button
        disabled={isKnocked}
        $customstyle={{
          width: '13rem',
          backgroundColor: isKnocked ? '#D3D3D3' : '#FAED46',
          color: isKnocked ? '#A9A9A9' : '#020202',
        }}
        onClick={handleKnock}
      >
        노크하기
      </Button>
    </S.EmptyFeedLayout>
  );
};

export default EmptyFeed;
