import { useState } from 'react';
import IcBell from '../../../assets/svg/IcNoticeOff';
import IcBellDot from '../../../assets/svg/IcNotice';
import NotificationModal, {
  NotificationItem,
} from '../NotificationModal/NotificationModal';
import * as S from './Header.style';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [notifications] = useState<NotificationItem[]>([
    {
      notificationID: '1',
      type: 'FRIEND',
      content: '코끼리님과 친구가 되었어요!',
      created_at: '2025-02-01',
    },
    {
      notificationID: '2',
      type: 'CHEER',
      content: '코끼리님이 게시글에 응원했어요!',
      created_at: '2025-02-02',
    },
  ]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);

    // 모달이 열릴 때만 상태를 업데이트
    if (isModalOpen) {
      setHasUnreadNotifications(false);
    }
  };

  return (
    <>
      <S.HeaderLayout>
        <S.BellIconBox onClick={toggleModal}>
          {hasUnreadNotifications ? <IcBellDot /> : <IcBell />}
        </S.BellIconBox>
      </S.HeaderLayout>
      {isModalOpen && (
        <NotificationModal
          notifications={notifications}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
