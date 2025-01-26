import * as S from './MomentAchievementStatus.style';
import { Fragment } from 'react';
import ProgressBar from './ProgressBar';

// 목 데이터
const moments = [
  {
    id: 1,
    title: '버킷리스트의 최대 글자수는 공백을 포함해서 서른자입니다',
    value: 100,
  },
  { id: 2, title: '오픽 AL 달성하기', value: 30 },
  { id: 3, title: '목도리 뜨개질로 만들기', value: 60 },
];

const MomentAchievementStatus = () => {
  return (
    <S.MomentAchievementStatusLayout>
      <S.TitleSpan>모멘트 달성 현황</S.TitleSpan>
      <S.MomentContainer>
        {moments.length > 0 ? (
          moments.map((moment, index) => (
            <Fragment key={moment.id}>
              <S.MomentItem>
                <S.MomentDetailsBox>
                  <span>{moment.title}</span>
                  <S.PercentageSpan>{moment.value} %</S.PercentageSpan>
                </S.MomentDetailsBox>
                <ProgressBar value={moment.value} />
              </S.MomentItem>
              {index < moments.length - 1 && <S.Divider />}
            </Fragment>
          ))
        ) : (
          // 진행 중 모멘트가 없는 경우
          <S.EmptyStateSpan>
            <S.HighlightSpan>모멘트</S.HighlightSpan>를 등록하고
            <br />
            현황을 <S.HighlightSpan>확인</S.HighlightSpan>해보세요 !
          </S.EmptyStateSpan>
        )}
      </S.MomentContainer>
    </S.MomentAchievementStatusLayout>
  );
};

export default MomentAchievementStatus;
