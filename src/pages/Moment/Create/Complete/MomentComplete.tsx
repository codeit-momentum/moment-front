import IcArrow from '../../../../assets/svg/common/IcArrow';
import * as S from './MomentComplete.style';
import Button from '../../../../components/buttons/Button';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { formatListDate } from '../../../../utils/formatDate';
import usePostMoments from '../../../../hooks/queries/moment/usePostMoments';
import IcDateContainer from '../../../../assets/svg/moment/IcDateContainer';
import MethodContainer from '../../../../components/Moment/ContainerLayout/ContainerLayout';
import { CreatedMoment, FrequencyType } from '../../../../types/moment/create';
import useResponseMessage from '../../../../hooks/common/useResponseMessage';

const MomentComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: createMoments, isPending } = usePostMoments();
  const { handleError, openModal, renderModal } = useResponseMessage(
    () => navigate,
  );

  const state = location.state as {
    bucketId: string;
    frequency: FrequencyType;
    moments: CreatedMoment[];
  };

  if (!state || !state.bucketId || !state.frequency || !state.moments) {
    alert('location state 없음');
    return <Navigate to="/moment/bucket" replace />;
  }
  const { bucketId, moments, frequency } = state;

  const handleConfirm = async () => {
    const payload = {
      startDate: moments[0]?.startDate,
      endDate: moments[moments.length - 1]?.endDate,
      moments,
      frequency,
    };

    createMoments(
      { bucketId, payload },
      {
        onSuccess: () => navigate('/moment/bucket'),
        onError: (error) => {
          handleError(error);
          openModal();
        },
      },
    );
  };

  return (
    <S.MomentCompleteLayout>
      {/* 타이틀 */}
      <S.MomentCompleteTitle>모멘트 설계 완료 !</S.MomentCompleteTitle>
      {/* 날짜 범위 */}
      <S.DateContainer>
        <IcDateContainer />
        <S.DateText>
          {moments[0].startDate}
          <IcArrow />
          {moments[moments.length - 1].endDate}
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
      {renderModal()}
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
