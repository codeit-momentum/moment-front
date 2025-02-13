import * as S from './NotificationModal.style';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
import { NoticeItemType, NoticeType } from '../../../types/home';
import IcMomentBlue from '../../../assets/svg/home/IcMomentBlue';
import IcFriendBlue from '../../../assets/svg/home/IcFriendBlue';

interface NotificationModalProps {
  noticeData: NoticeItemType[];
  onClose: () => void;
}

const NotificationModal = ({ noticeData, onClose }: NotificationModalProps) => {
  const rendalIcon = (type: NoticeType) => {
    return type === 'KNOCK' ? <IcMomentBlue /> : <IcFriendBlue />;
  };
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalLayout onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>알림</S.Title>
          <S.CloseIcon onClick={onClose}>
            <IcCloseModal />
          </S.CloseIcon>
        </S.Header>

        <S.NotificationList>
          {noticeData?.length > 0 ? (
            noticeData.map((notification) => (
              <S.NotificationItem key={notification.notificationID}>
                {rendalIcon(notification.type)}
                <S.TextContainer>
                  <S.Message>{notification.content}</S.Message>
                </S.TextContainer>
              </S.NotificationItem>
            ))
          ) : (
            <S.EmptyMessage>알림이 없습니다.</S.EmptyMessage>
          )}
        </S.NotificationList>
      </S.ModalLayout>
    </S.ModalOverlay>
  );
};

export default NotificationModal;
