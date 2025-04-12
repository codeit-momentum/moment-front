import IcArrow from '../../../../assets/svg/common/IcArrow';
import * as S from './MomentComplete.style';
import Button from '../../../../components/buttons/Button';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { formatListDate } from '../../../../utils/formatDate';
import usePostMoments from '../../../../hooks/queries/moment/usePostMoments';
import usePatchBucketChallenge from '../../../../hooks/queries/bucketList/usePatchBucektChallenge';
import IcDateContainer from '../../../../assets/svg/moment/IcDateContainer';
import MethodContainer from '../../../../components/Moment/ContainerLayout/ContainerLayout';
import { CreatedMoment, FrequencyType } from '../../../../types/moment/create';
import useGetBucketDetail from '../../../../hooks/queries/bucketList/useGetBucketDetail';

const MomentComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    bucketId: string;
    frequency: FrequencyType;
    moments: CreatedMoment[];
  };
  const { data, refetch } = useGetBucketDetail(
    sessionStorage.getItem('bucketId') || '',
  );

  const { mutateAsync: updateBucketChallenge } = usePatchBucketChallenge(); // `mutateAsync` 사용
  const { mutateAsync: createMoments, isPending } = usePostMoments();

  if (!state || !state.bucketId || !state.frequency || !state.moments) {
    alert('location state 없음');
    return <Navigate to="/moment/bucket" replace />;
  }
  const { bucketId, moments, frequency } = state;

  const handleConfirm = async () => {
    if (moments.length === 0) {
      alert('생성된 모멘트가 없습니다. 다시 시도해주세요.');
      return;
    }

    console.log('최종 API 요청 데이터:', {
      startDate: moments[0].startDate,
      endDate: moments[moments.length - 1].endDate,
      moments,
      frequency,
    });

    try {
      if (!data?.bucket.isChallenging) {
        console.log('도전 모드 비활성화 상태. PATCH 요청 실행.');
        await updateBucketChallenge({ id: bucketId });
        refetch();
      }

      const payload = {
        startDate: moments[0]?.startDate,
        endDate: moments[moments.length - 1]?.endDate,
        moments,
        frequency,
      };

      console.log('POST 요청 실행 (모멘트 생성)', payload);
      const responseData = await createMoments({ bucketId, payload });

      console.log('모멘트가 성공적으로 저장되었습니다:', responseData);

      navigate('/moment/bucket');
    } catch (error) {
      console.error('모멘트 생성 중 오류 발생:', error);

      alert('모멘트 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.MomentCompleteLayout>
      {/* 타이틀 */}
      <S.MomentCompleteTitle>모멘트 설계 완료 !</S.MomentCompleteTitle>
      {/* 날짜 범위 */}
      <S.DateContainer>
        <IcDateContainer />
        <S.DateText>
          {moments.length > 0 ? moments[0].startDate : 'N/A'}
          <IcArrow />
          {moments.length > 0 ? moments[moments.length - 1].endDate : 'N/A'}
        </S.DateText>
      </S.DateContainer>
      {/* 방법 리스트 */}
      <MethodContainer
        title="방법"
        containerStyle={{ marginTop: '1rem', padding: '1rem 1.8rem' }}
        titleStyle={{
          fontSize: '16px',
          padding: '0.5rem 2.4rem',
          marginBottom: '0',
        }}
      >
        <S.MethodListItemWrapper>
          {moments.map((moment) => (
            <S.MethodItem key={moment.startDate}>
              <S.MethodId>{formatListDate(moment.startDate)}</S.MethodId>
              <S.MethodDescription>{moment.content}</S.MethodDescription>
            </S.MethodItem>
          ))}
        </S.MethodListItemWrapper>
      </MethodContainer>
      <S.BtnContainer>
        <Button onClick={handleConfirm} disabled={isPending}>
          {isPending ? '저장 중...' : '확인'}
        </Button>
      </S.BtnContainer>
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
