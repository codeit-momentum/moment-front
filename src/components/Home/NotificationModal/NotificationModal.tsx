import { useEffect, useState } from 'react';
import * as S from './NotificationModal.style';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
import useGetNotice from '../../../hooks/queries/home/useGetNotice';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';

// NotificationItem 타입 정의
export interface NotificationItem {
  notificationID: string;
  type: 'FRIEND' | 'CHEER' | 'KNOCK';
  content: string;
  created_at: string;
}

interface NotificationModalProps {
  onClose: () => void;
}

const NotificationModal = ({ onClose }: NotificationModalProps) => {
  const { data: noticeData, refetch } = useGetNotice(); // 30초마다 자동 갱신됨
  const { mutate: patchNotice } = usePatchNotice();
  const [sortedNotifications, setSortedNotifications] = useState<
    NotificationItem[]
  >([]);

  console.log(noticeData);
  useEffect(() => {
    patchNotice(); // 알림 읽음 처리 실행
  }, [patchNotice]);

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
          {sortedNotifications.length > 0 ? (
            sortedNotifications.map((notification) => (
              <S.NotificationItem key={notification.notificationID}>
                <S.IconContainer />
                <S.TextContainer>
                  <S.UserName>
                    {notification.content.split('님')[0]}님
                  </S.UserName>
                  <S.Message>{notification.content.split('님')[1]}</S.Message>
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
