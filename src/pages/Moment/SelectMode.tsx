import { useNavigationType, useNavigate, useParams } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../types/moment/modeType';
import Button from '../../components/Button/Button';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import BackBtn from '../../components/BackBtn/BackBtn';
import useGetBucketDetail from '../../hooks/queries/bucketList/useGetBucketDetail';
/**
 * SelectMode
 * - 자동/수동 모드를 선택하는 페이지
 * - 선택된 모드에 따라 다음페이지로 이동
 */
const SelectMode = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const { id } = useParams() as { id: string };

  // React Query 활용하여 API 호출
  const { data, isLoading, isError } = useGetBucketDetail(id);

  // ID가 없거나 API 호출 실패 시 리다이렉트 처리
  if (!id || isError) {
    console.error('ID가 없거나 잘못되었습니다! 라우트 문제 확인 필요');
    navigate('/moment/bucket', { replace: true });
    return null;
  }

  /**
   * handleSelect
   * - 선택된 모드에 따라 경로 이동
   */
  const handleSelect = (mode: ModeType) => {
    navigate(`/moment/create-moment/${id}?mode=${mode}`, {
      state: { goal: data?.bucket?.content || '버킷리스트 없음' },
    });
  };

  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate('/moment/bucket'); // POP 상태에서는 지정된 경로로 이동
    } else {
      navigate(-1); // 다른 상태에서는 이전 페이지로 이동
    }
  };
  return (
    <S.SelectModeLayout>
      <BackBtn onClick={handleBack} />
      {/* HeaderComponent 적용 */}
      <HeaderComponent
        title={
          isLoading ? '로딩 중...' : data?.bucket?.content || '버킷리스트 없음'
        }
        subtitle="모멘트 생성 방법을 골라주세요..."
        onBackClick={handleBack}
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
