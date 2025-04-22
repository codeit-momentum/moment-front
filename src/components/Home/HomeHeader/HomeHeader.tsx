import { useState } from 'react';
import * as S from './HomeHeader.style';
import useModal from '../../../hooks/common/useModal';
import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';
import NotificationModal from '../NotificationModal/NotificationModal';
import IcNoticeOff from '../../../assets/svg/home/IcNoticeOff';
import { NoticeItemType } from '../../../types/home';

const HomeHeader = () => {
  const [isOpen, openModal, closeModal] = useModal();

  const { data: consecutiveDaysData } = useGetConsecutiveDays();
  const { mutate: patchNotice } = usePatchNotice();
  const [noticeData, setNoticeData] = useState<NoticeItemType[]>([]);

  const handleNotice = () => {
    patchNotice(undefined, {
      onSuccess: (data) => {
        setNoticeData(data.notifications);
      },
    });
    openModal();
  };

  return (
    <S.HeaderLayout>
      오늘은 작심
      <S.DateSpan>{consecutiveDaysData.consecutiveDays}</S.DateSpan>일
      <S.IconWrapper onClick={handleNotice}>
        <IcNoticeOff />
      </S.IconWrapper>
      {isOpen && (
        <NotificationModal noticeData={noticeData} onClose={closeModal} />
      )}
    </S.HeaderLayout>
  );
};

export default HomeHeader;
