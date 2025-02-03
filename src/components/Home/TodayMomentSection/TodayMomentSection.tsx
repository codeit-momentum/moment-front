import * as S from './TodayMomentSection.style';
import DayCheckboxGroup from './DayCheckboxGroup/DayCheckboxGroup';
import MomentList from './MomentList/MomentList';

const TodayMomentSection = () => {
  // Mock 데이터
  const mockDays = [
    { day: '월', isChecked: true },
    { day: '화', isChecked: false },
    { day: '수', isChecked: false },
    { day: '목', isChecked: false },
    { day: '금', isChecked: false },
    { day: '토', isChecked: false },
    { day: '일', isChecked: false },
  ];

  const mockMoments = [
    { id: 1, title: '뜨개질 10코 뜨기', category: '취미', isCompleted: true },
    { id: 2, title: '토익 공부', category: '언어', isCompleted: false },
    { id: 3, title: '책 10pg 읽기', category: '독서', isCompleted: true },
  ];

  // 인증 완료된 모멘트 수 계산
  const completedCount = mockMoments.filter(
    (moment) => moment.isCompleted,
  ).length;

  return (
    <S.TodayMomentLayout>
      <DayCheckboxGroup days={mockDays} />
      <S.DividerLine />
      <MomentList moments={mockMoments} />
      <S.TodayMessageBox>
        오늘의 모멘트 총 <span>{completedCount}</span>개 수집!
      </S.TodayMessageBox>
    </S.TodayMomentLayout>
  );
};

export default TodayMomentSection;
