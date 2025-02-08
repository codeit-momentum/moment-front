import IcArrow from '../../assets/svg/IcArrow';
import * as S from './MomentComplete.style';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CreateMomentResponse } from '../../types/moment/createMomentTypes';
import { generateMomentDates } from '../../utils/generateMomentDates';
import { formatListDate } from '../../utils/formatDate';
import usePostMoments from '../../hooks/queries/moment/usePostMoments';
import useGetBucketDetail from '../../hooks/queries/bucketList/useGetBucketDetail';
import usePatchBucketChallenge from '../../hooks/queries/bucketList/usePatchBucektChallenge';

/**
 * MomentComlete
 * 임시 데이터를 사용하여 "모멘트 설계 완료" 페이지 렌더링
 */
const MomentComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: paramId } = useParams();
  const id = paramId || location.state?.id;

  const {
    data,
    isLoading: isBucketLoading,
    isError,
    refetch,
  } = useGetBucketDetail(id);
  const { mutate: updateBucketChallenge, isPending: isUpdating } =
    usePatchBucketChallenge();
  const { mutate, isPending } = usePostMoments();

  const [moments, setMoments] = useState<
    { id: string; content: string; startDate: string; endDate: string }[]
  >([]);

  const momentData = location.state as CreateMomentResponse;

  // 실행 빈도 유효성 검사: `generateMomentDates` 실행 전 검증
  const allowedFrequencies = ['daily', 'every2days', 'weekly', 'monthly'];
  const frequency = allowedFrequencies.includes(momentData.frequency)
    ? momentData.frequency
    : 'daily';

  useEffect(() => {
    if (!momentData) {
      console.error('momentData가 정의되지 않았습니다.');
      return;
    }

    // `generateMomentDates`로 모멘트 데이터 생성
    const generatedMoments = generateMomentDates(momentData);

    if (generatedMoments.length === 0) {
      console.warn('generateMomentDates가 빈 배열을 반환했습니다.');
      return;
    }

    console.log('최종 변환된 momentDates:', generatedMoments);
    setMoments(generatedMoments);
  }, [momentData]);

  useEffect(() => {
    if (data?.bucket) {
      // 이미 도전 중이라면 PATCH 요청을 보내지 않음
      if (data.bucket.isChallenging) {
        console.log('이미 도전 중인 버킷입니다. PATCH 요청을 생략합니다.');
        return;
      }
      updateBucketChallenge(
        { bucketId: id },
        {
          onSuccess: () => {
            refetch(); // 최신 데이터 다시 가져오기
          },
          onError: (error) => {
            console.error('도전 모드 활성화 실패:', error);
          },
        },
      );
    }
  }, [data, id, updateBucketChallenge, refetch]);

  const handleConfirm = async () => {
    if (!moments.length) {
      alert('모멘트 데이터가 없습니다.');
      return;
    }

    if (isBucketLoading) {
      alert('버킷 정보를 로딩 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }
    if (!data?.bucket) {
      alert('버킷 정보를 불러올 수 없습니다.');
      return;
    }

    console.log('최종 bucket 데이터:', data.bucket);

    // 백엔드에서 `type === "REPEAT"` & `isChallenging === true` 조건 체크
    if (data.bucket.type !== 'REPEAT' || !data.bucket.isChallenging) {
      alert(
        '이 버킷에서는 모멘트를 추가할 수 없습니다. (반복형 + 도전 중이어야 함)',
      );
      return;
    }
    console.log('최종 API 요청 데이터:', {
      startDate: moments[0].startDate, // `formatApiDate` 변환 불필요
      endDate: moments[moments.length - 1].endDate,
      moments,
      frequency,
    });

    // API 요청 실행
    mutate(
      {
        bucketId: data.bucket.bucketID,
        payload: {
          startDate: moments[0].startDate,
          endDate: moments[moments.length - 1].endDate,
          moments,
          frequency,
        },
      },
      {
        onSuccess: (data) => {
          console.log('API 응답 데이터:', data);
          alert('모멘트가 성공적으로 저장되었습니다.');
          navigate('/moment/bucket');
        },
        onError: (error) => {
          console.error('Moment 저장 실패:', error);
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
        <S.DateText>
          {moments.length > 0 ? moments[0].startDate : 'N/A'}
        </S.DateText>
        <IcArrow />
        <S.DateText>
          {moments.length > 0 ? moments[moments.length - 1].endDate : 'N/A'}
        </S.DateText>
      </S.DateContainer>
      {/* 방법 리스트 */}
      <S.MethodContainer>
        <S.MethodLabel>방법</S.MethodLabel>
        <S.MethodListItemWrapper>
          {moments.map((moment) => (
            <S.MethodItem key={moment.id}>
              <S.MethodId>{formatListDate(moment.startDate)}</S.MethodId>
              <S.MethodDescription>{moment.content}</S.MethodDescription>
            </S.MethodItem>
          ))}
        </S.MethodListItemWrapper>
      </S.MethodContainer>
      <S.BtnContainer>
        <Button onClick={handleConfirm} disabled={isPending}>
          {isPending ? '저장 중...' : '확인'}
        </Button>
      </S.BtnContainer>
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
