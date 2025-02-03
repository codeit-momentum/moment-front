import { Fragment } from 'react';
import MomentAchievementStatusLayout from '../ContainerLayout/ContainerLayout';
import ProgressBar from './ProgressBar';
import * as S from './MomentAchievementStatus.style';
import { ChallengingBucket } from '../../../types/moment';
import { getAchievementRate } from '../../../utils/moment';

type MomentAchievementStatusProps = {
  data: ChallengingBucket[];
};

const MomentAchievementStatus = ({ data }: MomentAchievementStatusProps) => {
  console.log(data);
  return (
    <MomentAchievementStatusLayout
      containerStyle={{ padding: '2rem' }}
      titleStyle={{ padding: '0.5rem 1.9rem', marginBottom: '0.5rem' }}
      title="모멘트 달성 현황"
    >
      {data.length > 0 ? (
        <S.MomentContainer>
          {data.map((bucket, index) => (
            <Fragment key={bucket.bucketID}>
              <S.MomentItem>
                <S.MomentDetailsBox>
                  <span>{bucket.content}</span>
                  <S.PercentageSpan>
                    {`${getAchievementRate(
                      bucket.completedMomentsCount,
                      bucket.momentCount,
                    )} %`}
                  </S.PercentageSpan>
                </S.MomentDetailsBox>
                <ProgressBar
                  value={getAchievementRate(
                    bucket.completedMomentsCount,
                    bucket.momentCount,
                  )}
                />
              </S.MomentItem>
              {index < data.length - 1 && <S.Divider />}
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
