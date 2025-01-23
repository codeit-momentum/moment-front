import * as S from './MomentAchievementStatus.style';
import ProgressBar from './ProgressBar';

// 목 데이터
const moments = [
  { id: 1, title: '단어 500개 외우기', value: 40 },
  { id: 2, title: '오픽 AL 달성하기', value: 30 },
  { id: 3, title: '목도리 뜨개질로 만들기', value: 60 },
];

const MomentAchievementStatus = () => {
  return (
    <S.MomentAchievementStatusLayout>
      <S.TitleSpan>모멘트 달성 현황</S.TitleSpan>
      <S.MomentContainer>
        {moments.length > 0 ? (
          moments.map((moment) => (
            <S.MomentItem key={moment.id}>
              <S.MomentDetailsBox>
                <span>{moment.title}</span>
                <span>{moment.value}%</span>
              </S.MomentDetailsBox>
              <ProgressBar value={moment.value} />
            </S.MomentItem>
          ))
        ) : (
          // 진행 중 모멘트가 없는 경우
          <S.EmptyMomentSpan>
            모멘트를 등록하고
            <br />
            현황을 확인해보세요 !
          </S.EmptyMomentSpan>
        )}
      </S.MomentContainer>
    </S.MomentAchievementStatusLayout>
  );
};

export default MomentAchievementStatus;
