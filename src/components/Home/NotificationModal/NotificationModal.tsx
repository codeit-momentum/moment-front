import { useEffect, useState } from 'react';
import * as S from './NotificationModal.style';

// NotificationItem 타입을 Header와 공유
export interface NotificationItem {
  notificationID: string;
  type: 'FRIEND' | 'CHEER' | 'KNOCK';
  content: string;
  created_at: string;
}

interface NotificationModalProps {
  notifications: NotificationItem[];
  onClose: () => void; // 모달 닫기 함수 (Header에서 전달)
}

const NotificationModal = ({
  notifications,
  onClose,
}: NotificationModalProps) => {
  const [sortedNotifications, setSortedNotifications] = useState<
    NotificationItem[]
  >([]);

  // 알림을 최신순으로 정렬 (created_at 값이 가장 최근인 것이 위로)
  useEffect(() => {
    const sorted = [...notifications].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
    setSortedNotifications(sorted);
  }, [notifications]);

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalLayout onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        <S.Header>
          <S.Title>알림</S.Title>
          <S.CloseIcon onClick={onClose} /> {/* X 버튼 클릭 시 모달 닫기 */}
        </S.Header>

        {/* 알림 리스트 */}
        <S.NotificationList>
          {sortedNotifications.map((notification) => (
            <S.NotificationItem key={notification.notificationID}>
              <S.IconContainer />
              <S.TextContainer>
                <S.UserName>{notification.content.split('님')[0]}님</S.UserName>
                <S.Message>{notification.content.split('님')[1]}</S.Message>
              </S.TextContainer>
            </S.NotificationItem>
          ))}
        </S.NotificationList>
      </S.ModalLayout>
    </S.ModalOverlay>
  );
};

export default NotificationModal;
