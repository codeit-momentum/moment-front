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

const MomentComplete = () => {
  const navigate = useNavigate();
  const bucketId = useBucketId();
  const { momentData, saveMomentData } = useMomentData(bucketId);

  const {
    data,
    isLoading: isBucketLoading,
    refetch,
  } = useGetBucketDetail(bucketId);

  const [moments, setMoments] = useState<
    { id: string; content: string; startDate: string; endDate: string }[]
  >([]);

  const { mutateAsync: updateBucketChallenge } = usePatchBucketChallenge(); // `mutateAsync` 사용
  const { mutateAsync: createMoments, isPending } = usePostMoments();

  useEffect(() => {
    if (isBucketLoading) return;

    if (
      !momentData ||
      !momentData.todoList ||
      momentData.todoList.length === 0
    ) {
      console.error(
        `momentConfig-${bucketId}가 없습니다. sessionStorage에서도 없음`,
      );

      const restoredData = localStorage.getItem(`momentConfig-${bucketId}`);
      if (restoredData) {
        console.log(
          `localStorage에서 momentData 복구됨:`,
          JSON.parse(restoredData),
        );
        saveMomentData(JSON.parse(restoredData));
        return;
      }
      alert('세션 데이터가 유실되었습니다. 다시 생성해주세요.');
      navigate(`/moment/create-moment/${bucketId}`, { replace: true });
      return;
    }

    console.log(`최종 복구된 momentConfig-${bucketId}:`, momentData);
  }, [isBucketLoading, navigate, bucketId]);

  useEffect(() => {
    if (!momentData) return;

    const validFrequency = [
      'daily',
      'every2days',
      'weekly',
      'monthly',
    ].includes(momentData.frequency)
      ? momentData.frequency
      : 'daily';

    // moments가 없으면 `generateMomentDates` 실행
    const generatedMoments = generateMomentDates({
      ...momentData,
      frequency: validFrequency,
    });

    if (generatedMoments.length === 0) {
      console.warn('generateMomentDates가 빈 배열을 반환했습니다.');
      return;
    }

    setMoments((prevMoments) => {
      const isSame =
        JSON.stringify(prevMoments) === JSON.stringify(generatedMoments);
      return isSame ? prevMoments : generatedMoments;
    });
  }, [momentData]);

  const handleConfirm = async () => {
    if (!momentData) {
      alert('모멘트 정보를 불러올 수 없습니다. 다시 시도해주세요.');
      return;
    }

    if (!bucketId || isBucketLoading || !data?.bucket) {
      alert('버킷 정보를 불러올 수 없습니다. 다시 시도해주세요.');
      return;
    }

    if (data.bucket.type !== 'REPEAT') {
      alert(' 반복형 버킷만 모멘트를 추가할 수 있습니다.');
      return;
    }

    if (moments.length === 0) {
      alert('생성된 모멘트가 없습니다. 다시 시도해주세요.');
      return;
    }

    console.log('최종 API 요청 데이터:', {
      startDate: moments[0]?.startDate || '',
      endDate: moments[moments.length - 1]?.endDate || '',
      moments,
      frequency: momentData.frequency,
    });

    try {
      if (!data.bucket.isChallenging) {
        console.log('도전 모드 비활성화 상태. PATCH 요청 실행.');
        await updateBucketChallenge({ id: bucketId });
        refetch();
      }

      const payload = {
        startDate: moments[0]?.startDate,
        endDate: moments[moments.length - 1]?.endDate,
        moments,
        frequency: momentData.frequency,
      };

      console.log('POST 요청 실행 (모멘트 생성)', payload);
      const responseData = await createMoments({ bucketId, payload });

      console.log('모멘트가 성공적으로 저장되었습니다:', responseData);

      navigate('/moment/bucket');
    } catch (error) {
      console.error('모멘트 생성 중 오류 발생:', error);
      saveMomentData(momentData);
      alert('모멘트 생성에 실패했습니다. 다시 시도해주세요.');
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
