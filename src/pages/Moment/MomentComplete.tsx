import IcArrow from '../../assets/svg/IcArrow';
import * as S from './MomentComplete.style';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CreateMomentResponse } from '../../types/moment/createMomentTypes';
import { generateMomentDates } from '../../utils/generateMomentDates';
import {
  formatHeaderDate,
  formatListDate,
  formatApiDate,
} from '../../utils/formatDate';
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
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [moments, setMoments] = useState<
    { content: string; startDate: string; endDate: string }[]
  >([]);

  const { id: paramId } = useParams();
  const id = paramId || location.state?.id;
  const { data, isLoading: isBucketLoading, isError } = useGetBucketDetail(id);
  const { mutate: updateBucketChallenge, isPending: isUpdating } =
    usePatchBucketChallenge();
  const { mutate, status } = usePostMoments();
  const isLoading = status === 'pending';

  useEffect(() => {
    if (location.state) {
      const momentData = location.state as CreateMomentResponse;

      // 현재 날짜를 기반으로 startDate 설정
      const todayDate = new Date().toISOString().split('T')[0];
      setStartDate(formatHeaderDate(todayDate));

      // 실행 날짜 + 할 일 리스트 함께 계산 후 변환
      const generatedMoments = generateMomentDates(
        todayDate, // startDate를 직접 전달
        momentData,
      ).map((moment) => ({
        content: moment.content,
        startDate: moment.startDate,
        endDate: moment.endDate,
      }));
      console.log('최종 변환된 momentDates:', generatedMoments);

      setMoments(generatedMoments);

      // 마지막 moment의 endDate를 설정
      if (generatedMoments.length > 0) {
        setEndDate(
          formatHeaderDate(
            generatedMoments[generatedMoments.length - 1].endDate,
          ),
        );
      }
    }
  }, [location.state]);

  const { refetch } = useGetBucketDetail(id);

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

    const formattedStartDate = formatApiDate(startDate);
    const formattedEndDate = formatApiDate(moments[moments.length - 1].endDate);

    const allowedFrequencies = ['daily', 'every2days', 'weekly', 'monthly'];
    const formattedFrequency = allowedFrequencies.includes(
      location.state.frequency,
    )
      ? location.state.frequency
      : 'daily';

    const formattedMoments = moments.map((moment) => ({
      content: moment.content,
      startDate: formatApiDate(moment.startDate),
      endDate: formatApiDate(moment.endDate),
    }));

    console.log('최종 API 요청 데이터:', {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      moments: formattedMoments,
      frequency: formattedFrequency,
    });

    // API 요청 실행
    mutate(
      {
        bucketId: data.bucket.bucketID,
        payload: {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          moments: formattedMoments,
          frequency: formattedFrequency,
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
        <S.DateText>{startDate}</S.DateText>
        <IcArrow />
        <S.DateText>{endDate}</S.DateText>
      </S.DateContainer>
      {/* 방법 리스트 */}
      <S.MethodContainer>
        <S.MethodLabel>방법</S.MethodLabel>
        <S.MethodListItemWrapper>
          {moments.map((moment, index) => (
            <S.MethodItem key={index}>
              <S.MethodId>{formatListDate(moment.startDate)}</S.MethodId>
              <S.MethodDescription>{moment.content}</S.MethodDescription>
            </S.MethodItem>
          ))}
        </S.MethodListItemWrapper>
      </S.MethodContainer>
      <S.BtnContainer>
        <Button onClick={handleConfirm} disabled={isLoading}>
          {isLoading ? '저장 중...' : '확인'}
        </Button>
      </S.BtnContainer>
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
