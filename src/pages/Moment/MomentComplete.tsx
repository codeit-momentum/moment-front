import IcArrow from '../../assets/svg/IcArrow';
import * as S from './MomentComplete.style';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { generateMomentDates } from '../../utils/generateMomentDates';
import { formatListDate } from '../../utils/formatDate';
import usePostMoments from '../../hooks/queries/moment/usePostMoments';
import useGetBucketDetail from '../../hooks/queries/bucketList/useGetBucketDetail';
import usePatchBucketChallenge from '../../hooks/queries/bucketList/usePatchBucektChallenge';
import useBucketId from '../../hooks/useBucketId';
import useMomentData from '../../hooks/useMomentData';

/**
 * MomentComlete
 * 임시 데이터를 사용하여 "모멘트 설계 완료" 페이지 렌더링
 */
const MomentComplete = () => {
  const navigate = useNavigate();
  const bucketId = useBucketId();

  const {
    data,
    isLoading: isBucketLoading,
    refetch,
  } = useGetBucketDetail(bucketId);
  const { mutate: updateBucketChallenge } = usePatchBucketChallenge();
  const { mutateAsync, isPending } = usePostMoments();

  const [moments, setMoments] = useState<
    { id: string; content: string; startDate: string; endDate: string }[]
  >([]);

  const momentData = useMomentData(bucketId);

  useEffect(() => {
    if (
      !momentData ||
      !momentData.todoList ||
      momentData.todoList.length === 0
    ) {
      console.error(
        `🚨 momentData-${bucketId}가 없습니다. sessionStorage에서도 없음`,
      );
      alert('잘못된 접근입니다. 처음부터 다시 시도해주세요.');
      navigate(`/moment/create-moment/${bucketId}`);
    } else {
      console.log(`✅ 최종 복구된 momentData-${bucketId}:`, momentData);
    }
  }, [momentData]);

  // 실행 빈도 유효성 검사: `generateMomentDates` 실행 전 검증
  const allowedFrequencies = ['daily', 'every2days', 'weekly', 'monthly'];
  const frequency =
    momentData && allowedFrequencies.includes(momentData.frequency)
      ? momentData.frequency
      : 'daily';

  useEffect(() => {
    if (!momentData) return;

    const generatedMoments = generateMomentDates(momentData);

    if (generatedMoments.length === 0) {
      console.warn('generateMomentDates가 빈 배열을 반환했습니다.');
      return;
    }

    setMoments((prevMoments) => {
      const isSame =
        JSON.stringify(prevMoments) === JSON.stringify(generatedMoments);
      if (isSame) return prevMoments;
      console.log('최종 변환된 momentDates:', generatedMoments);
      return generatedMoments;
    });
  }, [momentData]);

  useEffect(() => {
    if (data?.bucket) {
      // 이미 도전 중이라면 PATCH 요청을 보내지 않음
      if (data.bucket.isChallenging) {
        console.log('이미 도전 중인 버킷입니다. PATCH 요청을 생략합니다.');
        return;
      }
      updateBucketChallenge(
        { id: bucketId },
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
  }, [data, bucketId, updateBucketChallenge, refetch]);

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

    if (data.bucket.type !== 'REPEAT') {
      alert('이 버킷에서는 모멘트를 추가할 수 없습니다. (반복형이어야 함)');
      return;
    }

    console.log('최종 API 요청 데이터:', {
      startDate: moments[0].startDate,
      endDate: moments[moments.length - 1].endDate,
      moments,
      frequency,
    });

    try {
      // PATCH 요청 (isChallenging을 true로 변경) & POST 요청(모멘트 생성) 함께 실행
      await updateBucketChallenge({ id: bucketId });
      console.log('도전 상태 변경 완료 (isChallenging=true)');

      const responseData = await mutateAsync({
        bucketId,
        payload: {
          startDate: moments[0].startDate,
          endDate: moments[moments.length - 1].endDate,
          moments,
          frequency,
        },
      });

      console.log('모멘트가 성공적으로 저장되었습니다:', responseData);
      alert('모멘트가 성공적으로 저장되었습니다.');

      // sessionStorage에 모멘트 데이터 저장하여 `MomentUploadStatus.tsx`에서 정상 반영되도록 함
      sessionStorage.setItem(
        `momentData-${bucketId}`,
        JSON.stringify(responseData),
      );

      navigate('/moment/bucket');
    } catch (error) {
      console.error('오류 발생:', error);
      alert('모멘트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
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
