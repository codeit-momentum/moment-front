import { useNavigationType, useNavigate, useParams } from 'react-router-dom';
import * as S from './SelectMode.style';
import { ModeType } from '../../types/moment/modeType';
import Button from '../../components/Button/Button';
import HeaderComponent from '../../components/Moment/HeaderComponent/HeaderComponent';
import BackBtn from '../../components/BackBtn/BackBtn';
import instance from '../../apis/client';
import { useState, useEffect } from 'react';
/**
 * SelectMode
 * - 자동/수동 모드를 선택하는 페이지
 * - 선택된 모드에 따라 다음페이지로 이동
 */
const SelectMode = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const { id } = useParams() as { id: string };
  const [goal, setGoal] = useState<string>('로딩 중...');

  useEffect(() => {
    console.log('현재 ID 값:', id);

    if (!id) {
      console.error('ID가 없습니다! 라우트 문제 확인 필요');
      setGoal('잘못된 ID');
      return;
    }

    instance
      .get(`/api/bucket/${id}`)
      .then((res) => {
        console.log('API 응답 데이터:', res.data);
        setGoal(res.data.bucket.content || '버킷리스트 없음');
      })
      .catch(() => setGoal('버킷리스트 없음'));
  }, [id]);

  /**
   * handleSelect
   * - 선택된 모드에 따라 경로 이동
   */
  const handleSelect = (mode: ModeType) => {
    navigate(`/moment/create-moment/${id}?mode=${mode}`); // id 추가
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
        title={goal}
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
