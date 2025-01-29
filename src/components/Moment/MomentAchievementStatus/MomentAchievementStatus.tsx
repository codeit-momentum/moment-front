import { Fragment } from 'react';
import MomentAchievementStatusLayout from '../ContainerLayout/ContainerLayout';
import ProgressBar from './ProgressBar';
import * as S from './MomentAchievementStatus.style';

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
    <MomentAchievementStatusLayout
      containerStyle={{ padding: '2rem', gap: '0.5rem' }}
      titleStyle={{ padding: '0.5rem 1.9rem' }}
      title="모멘트 달성 현황"
    >
      {moments.length > 0 ? (
        <S.MomentContainer>
          {moments.map((moment, index) => (
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
          ))}
        </S.MomentContainer>
      ) : (
        // 진행 중 모멘트가 없는 경우
        <S.EmptyContainer>
          <S.EmptyStateSpan>
            <S.HighlightSpan>모멘트</S.HighlightSpan>를 등록하고
            <br />
            현황을 <S.HighlightSpan>확인</S.HighlightSpan>해보세요 !
          </S.EmptyStateSpan>
        </S.EmptyContainer>
      )}
    </MomentAchievementStatusLayout>
  );
};

export default MomentAchievementStatus;
