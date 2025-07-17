import * as S from './MomentComplete.style';
import Button from '../../../components/buttons/Button';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { formatListDate, formatHeaderDate } from '../../../utils/formatDate';
import usePostMoments from '../../../hooks/queries/moment/usePostMoments';
import IcDateContainer from '../../../assets/svg/moment/IcDateContainer';
import MethodContainer from '../../../components/Moment/ContainerLayout/ContainerLayout';
import { CompleteStateType } from '../../../types/moment/create';
import useResponseMessage from '../../../hooks/common/useResponseMessage';

const MomentComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: postMoments, isPending } = usePostMoments();
  const { handleError, openModal, RenderModal } = useResponseMessage();

  const state = location.state as CompleteStateType;

  if (!state || !state.bucketId || !state.frequency || !state.moments) {
    alert('페이지 정보를 불러올 수 없습니다. 버킷리스트 페이지로 이동합니다.');
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

    postMoments(
      { bucketId, payload },
      {
        onSuccess: () => navigate('/moment/bucket', { replace: true }),
        onError: (error) => {
          handleError(error);
          openModal();
        },
      },
    );
  };

  return (
    <S.MomentCompleteLayout>
      <S.MomentCompleteTitle>모멘트 설계 완료 !</S.MomentCompleteTitle>
      <S.DateContainer>
        <IcDateContainer />
        <S.DateText>
          <span>{formatHeaderDate(moments[0].startDate)}</span>
          부터&emsp;
          <span>{formatHeaderDate(moments[moments.length - 1].endDate)}</span>
          까지
        </S.DateText>
      </S.DateContainer>

      <MethodContainer title="방법">
        <S.MethodList>
          {moments.map((moment) => (
            <S.MethodItem key={moment.startDate}>
              <S.MethodItemDate>
                {formatListDate(moment.startDate)}
              </S.MethodItemDate>
              <S.MethodItemContent>{moment.content}</S.MethodItemContent>
            </S.MethodItem>
          ))}
        </S.MethodList>
      </MethodContainer>
      <Button
        onClick={handleConfirm}
        disabled={isPending}
        $customstyle={{ marginTop: '2.9rem' }}
      >
        {isPending ? '저장 중...' : '확인'}
      </Button>
      {RenderModal()}
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
