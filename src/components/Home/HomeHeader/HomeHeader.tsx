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

  const handleNotice = () => {
    patchNotice(undefined, {
      onSuccess: (data) => {
        setNoticeData(data.notifications);
      },
    });
    setIsModalOpen(true); // 모달 열기
  };

  return (
    <S.HeaderLayout>
      오늘은 작심
      <S.DateSpan>{consecutiveDaysData.consecutiveDays}</S.DateSpan>일
      <S.IconWrapper onClick={handleNotice}>
        <IcNoticeOff />
      </S.IconWrapper>
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
