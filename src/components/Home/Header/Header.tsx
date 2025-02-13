import { useEffect, useState } from 'react';
import * as S from './Header.style';
import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';
import useGetNotice from '../../../hooks/queries/home/useGetNotice';
import NotificationModal from '../NotificationModal/NotificationModal';
import IcNotice from '../../../assets/svg/home/IcNotice';
import IcNoticeOff from '../../../assets/svg/home/IcNoticeOff';
import { NoticeItemType } from '../../../types/home';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    data: consecutiveDaysData,
    isLoading,
    isError,
  } = useGetConsecutiveDays();
  const { data: noticeCount, refetch } = useGetNotice();
  const { mutate: patchNotice } = usePatchNotice();
  const [noticeData, setNoticeData] = useState<NoticeItemType[]>([]);

  const handleNotificationClick = () => {
    patchNotice(
      {},
      {
        onSuccess: (data) => {
          console.log(data);
          setNoticeData(data.notifications);
        },
      },
    );
    setIsModalOpen(true); // 모달 열기
  };

  if (isLoading) {
    return <S.HeaderLayout>로딩 중...</S.HeaderLayout>;
  }

  if (isError || !consecutiveDaysData?.success) {
    return <S.HeaderLayout>데이터 로드 실패</S.HeaderLayout>;
  }
  console.log(noticeData);
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
        {noticeCount > 0 ? <IcNotice /> : <IcNoticeOff />}
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

export default Header;
