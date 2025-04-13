import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../../../types/moment/create';
import Button from '../../../../components/buttons/Button';
import HeaderComponent from '../../../../components/Moment/Create/HeaderComponent/HeaderComponent';
import BtnBack from '../../../../components/buttons/Back/BtnBack';
import useGetBucketDetail from '../../../../hooks/queries/bucketList/useGetBucketDetail';
import useBucketId from '../../../../hooks/moment/useBucketId';
import Fallback from '../../../Fallback/Fallback';

/**
 * SelectMode
 * - 자동/수동 모드를 선택하는 페이지
 * - 선택된 모드에 따라 다음페이지로 이동
 */
const SelectMode = () => {
  const navigate = useNavigate();
  const bucketId = useBucketId();

  // React Query 활용하여 버킷 상세 정보 가져오기
  const { data, isLoading, isError } = useGetBucketDetail(bucketId);

  // ID가 없거나 API 호출 실패 시 리다이렉트 처리
  useEffect(() => {
    if (!bucketId || isError) {
      console.error('ID가 없거나 API 호출 중 에러가 발생했습니다.');
      alert('버킷 정보를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.');
      navigate('/moment/bucket', { replace: true });
    }

    if (data?.bucket.isChallenging) {
      alert('이미 진행 중인 버킷리스트입니다.');
      navigate('/moment/bucket', { replace: true });
    }
  }, [data, bucketId, isError, navigate]);

  // 로딩 처리
  if (isLoading || !data) {
    return <Fallback />;
  }

  const goal = data.bucket.content;

  const handleSelect = (mode: ModeType) => {
    // sessionStorage에 버킷 ID 저장 (데이터 유지 목적)
    sessionStorage.setItem('bucketId', bucketId);

    navigate(`/moment/create-moment/${bucketId}?mode=${mode}`, {
      state: { id: bucketId, goal, mode },
    });
  };

  return (
    <S.SelectModeLayout>
      <BtnBack navigateURL={'/moment/bucket'} />
      {/* HeaderComponent 적용 */}
      <HeaderComponent
        title={goal}
        subtitle="모멘트 생성 방법을 골라주세요..."
      />
      <S.BtnContainer>
        <Button
          $customstyle={{
            width: '22rem',
            height: '5rem',
            backgroundColor: '#020202',
            border: '3px solid #6A7CB7',
            color: '#FCFCFC',
          }}
          onClick={() => handleSelect('auto')}
        >
          <S.BtnHighlightedText color="#6A7CB7">자동</S.BtnHighlightedText>
          으로 생성할게요
        </Button>
        <Button
          $customstyle={{
            width: '22rem',
            height: '5rem',
            backgroundColor: '#020202',
            border: '3px solid #FAED46',
            color: '#FCFCFC',
          }}
          onClick={() => handleSelect('manual')}
        >
          <S.BtnHighlightedText color="#FAED46">수동</S.BtnHighlightedText>
          으로 생성할게요
        </Button>
      </S.BtnContainer>
    </S.SelectModeLayout>
  );
};

export default SelectMode;
