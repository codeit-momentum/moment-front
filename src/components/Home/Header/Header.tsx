import { useEffect } from 'react';
//import NotificationModal, {
//  NotificationItem,
//} from '../NotificationModal/NotificationModal';
import * as S from './Header.style';
//import IcNotice from './../../../assets/svg/IcNotice';
//import IcNoticeOff from './../../../assets/svg/IcNoticeOff';
import useGetConsecutiveDays from '../../../hooks/queries/home/useGetConsecutiveDays';
import usePatchNotice from '../../../hooks/queries/home/usePatchNotice';
import useGetNotice from '../../../hooks/queries/home/useGetNotice';

const Header = () => {
  //const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    data: consecutiveDaysData,
    isLoading,
    isError,
  } = useGetConsecutiveDays();
  const { data: noticeCount } = useGetNotice();
  const { mutate: patchNotice } = usePatchNotice();

  console.log(noticeCount);
  // 모달 토글 함수
  const toggleModal = () => {
    //  setIsModalOpen((prev: boolean) => !prev);
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
      <S.BellIconWrapper onClick={toggleModal}>
        {/*hasUnreadNotifications ? <IcNotice /> : <IcNoticeOff />*/}
      </S.BellIconWrapper>
    </S.HeaderLayout>
  );
};

export default Header;
