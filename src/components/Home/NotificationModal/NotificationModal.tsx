//import { useEffect, useState } from 'react';
import * as S from './NotificationModal.style';
import IcCloseModal from '../../../assets/svg/IcCloseModal';
//import { useGetNotifications } from '../../../hooks/queries/home/useGetNotifications';

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
  /*
  const { data, isLoading, isError } = useGetNotifications();
  const [sortedNotifications, setSortedNotifications] = useState<
    NotificationItem[]
  >([]);

  // 알림 데이터 정렬
  useEffect(() => {
    if (data?.notifications) {
      const sorted = [...data.notifications].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      setSortedNotifications(sorted.slice(0, 15)); // 최대 15개만 표시
    }
  }, [data]);

  // 로딩 및 에러 처리
  if (isLoading) return <S.ModalOverlay>로딩 중...</S.ModalOverlay>;
  if (isError)
    return (
      <S.ModalOverlay>알림 데이터를 불러오는 데 실패했습니다.</S.ModalOverlay>
    );
*/
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalLayout onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        <S.Header>
          <S.Title>알림</S.Title>
          <S.CloseIcon onClick={onClose}>
            <IcCloseModal />
          </S.CloseIcon>
        </S.Header>

        {/* 알림 리스트 
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
        </S.NotificationList>*/}
      </S.ModalLayout>
    </S.ModalOverlay>
  );
};

export default NotificationModal;
