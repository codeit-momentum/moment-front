import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import IcBell from '../../../assets/svg/IcNoticeOff';
import IcNotice from '../../../assets/svg/IcNotice';
import NotificationModal from '../NotificationModal/NotificationModal';
import * as S from './Header.style';
import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentDate = new Date().toISOString().split('T')[0]; // 오늘 날짜
  const {
    data: consecutiveDaysData,
    isLoading,
    isError,
  } = useGetConsecutiveDays(currentDate);

  // 모달 토글 함수
  const toggleModal = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  // 로딩 및 에러 처리
  if (isLoading) {
    return <S.HeaderLayout>로딩 중...</S.HeaderLayout>;
  }

  if (isError || !consecutiveDaysData?.success) {
    return <S.HeaderLayout>데이터 로드 실패</S.HeaderLayout>;
  }

  return (
    <S.HeaderLayout>
      <S.StreakTextContainer>
        <S.StreakText>오늘은 작심</S.StreakText>
        <S.StreakHighlight>
          {consecutiveDaysData.consecutiveDays || 0}
        </S.StreakHighlight>
        <S.StreakText>일</S.StreakText>
      </S.StreakTextContainer>
      <S.BellIconBox onClick={toggleModal}>
        {isModalOpen ? <IcNotice /> : <IcBell />}
      </S.BellIconBox>
      {isModalOpen && (
        <NotificationModal
          notifications={consecutiveDaysData.notifications || []} // API에서 notifications 데이터 가져오기
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </S.HeaderLayout>
  );
};

export default Header;
