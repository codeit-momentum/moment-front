import { useEffect, useState } from 'react';
import * as S from './Header.style';
// import IcNotice from '../../../../src/assets/svg/home/IcNotice';
// import IcNoticeOff from '../../../assets/svg/home/IcNoticeOff';
import IcClip from '../../../assets/svg/home/IcClip';
import IcClipOff from '../../../assets/svg/home/IcClipOff';
import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';
import useGetNotice from '../../../hooks/queries/home/useGetNotice';
import { useWebSocketNotifications } from '../../../hooks/queries/home/useWebSocketNotifications';
import NotificationModal from '../NotificationModal/NotificationModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentDate = new Date().toISOString().split('T')[0]; // 오늘 날짜
  const {
    data: consecutiveDaysData,
    isLoading,
    isError,
  } = useGetConsecutiveDays(currentDate);
  const { data: noticeCount, refetch } = useGetNotice();
  const { mutate: patchNotice } = usePatchNotice();

  // 웹소켓에서 알림 개수 실시간 업데이트
  const newNotificationCount = useWebSocketNotifications('userID');
  console.log(' 서버에서 받은 알림 개수:', noticeCount);
  console.log(' 웹소켓으로 받은 알림 개수:', newNotificationCount);

  // 알림 아이콘 클릭 → 모달 열기 & 읽음 처리
  const handleNotificationClick = () => {
    setIsModalOpen(true); // 모달 열기
    if (noticeCount && noticeCount > 0) {
      patchNotice(); // 읽음 처리 API 호출
      console.log('📨 알림 확인! PATCH 요청 보냄');

      if (refetch) {
        setTimeout(() => {
          refetch(); // PATCH 이후 알림 개수 다시 가져오기
          console.log('🔄 알림 개수 refetch 실행!');
        }, 500);
      }
    }
  };
  useEffect(() => {
    patchNotice();
  }, [patchNotice]);
  if (isLoading) {
    return <S.HeaderLayout>로딩 중...</S.HeaderLayout>;
  }

  if (isError || !consecutiveDaysData?.success) {
    return <S.HeaderLayout>데이터 로드 실패</S.HeaderLayout>;
  }

  return (
    <S.HeaderLayout>
      {/*isModalOpen && (
        /*<NotificationModal
          notifications={consecutiveDaysData.notifications || []} // API에서 notifications 데이터 가져오기
          onClose={() => setIsModalOpen(false)}
        /> <></>
      )*/}
      <S.StreakTextContainer>
        오늘은 작심
        <S.StreakHighlight>
          {consecutiveDaysData.consecutiveDays}
        </S.StreakHighlight>
        일
      </S.StreakTextContainer>
      <S.BellIconWrapper onClick={handleNotificationClick}>
        {(noticeCount || newNotificationCount) > 0 ? <IcClip /> : <IcClipOff />}
      </S.BellIconWrapper>

      {/* 알림 모달 */}
      {isModalOpen && (
        <NotificationModal onClose={() => setIsModalOpen(false)} />
      )}
    </S.HeaderLayout>
  );
};

export default Header;
