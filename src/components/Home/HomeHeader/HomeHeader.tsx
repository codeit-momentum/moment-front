import { useState } from 'react';
import * as S from './HomeHeader.style';
import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';
import NotificationModal from '../NotificationModal/NotificationModal';
import IcNoticeOff from '../../../assets/svg/home/IcNoticeOff';
import { NoticeItemType } from '../../../types/home';

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data: consecutiveDaysData } = useGetConsecutiveDays();
  const { mutate: patchNotice } = usePatchNotice();
  const [noticeData, setNoticeData] = useState<NoticeItemType[]>([]);

  const handleNotificationClick = () => {
    patchNotice(undefined, {
      onSuccess: (data) => {
        setNoticeData(data.notifications);
      },
    });
    setIsModalOpen(true); // 모달 열기
  };

  return (
    <S.HeaderLayout>
      <S.StreakTextContainer>
        오늘은 작심
        <S.StreakHighlight>
          {consecutiveDaysData.consecutiveDays}
        </S.StreakHighlight>
        일
      </S.StreakTextContainer>

      <S.BellIconWrapper onClick={handleNotificationClick}>
        <IcNoticeOff />
      </S.BellIconWrapper>

      {isModalOpen && (
        <NotificationModal
          noticeData={noticeData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </S.HeaderLayout>
  );
};

export default HomeHeader;
