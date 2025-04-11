import { useState, useEffect, ChangeEvent } from 'react';
import * as S from './DurationComponent.style';
import { ModeType } from '../../../types/moment/modeType';
import Button from '../../Button/Button';
import IcLoading from '../../../assets/svg/IcLoading';
import Divider from '../../Divider/Divider';
import { autoDuration } from '../../../apis/AI/autoDuration';

interface DurationProps {
  goal: string;
  mode: ModeType; // 'auto' 또는 'manual'
  onEdit: (duration: number) => void; // 수정 및 확정 시 상위 컴포넌트로 전달
}

/**
 * DurationComponent
 * - 자동/수동 모드에 따라 초기 상태와 UI 분기 처리
 * - 예상 소요 기간을 표시하거나 수정할 수 있는 컴포넌트
 */
const DurationComponent = ({ goal, mode, onEdit }: DurationProps) => {
  const [duration, setDuration] = useState<number>(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // 확정 상태 관리
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  // 자동 모드 초기 값 설정
  useEffect(() => {
    const getAutoDuration = async () => {
      setIsLoadingAI(true);

      try {
        const days = await autoDuration(goal);
        setDuration(days);
      } catch (error) {
        console.error(error);
        alert(
          'AI 예상 소요 기간 생성 중 오류가 발생했습니다. 다시 시도해주세요.',
        );
        setDuration(0);
      } finally {
        setIsLoadingAI(false);
      }
    };

    if (mode === 'auto') {
      getAutoDuration();
    }
  }, [mode, goal]);

  //입력값 변경 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDuration(newValue === '' ? 0 : Number(newValue));
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    if (duration < 1) {
      alert('1일 이상으로 설정해주세요.');
      return;
    }
    onEdit(duration); //부모컴포넌트에 전달
    setIsConfirmed(true); //확정 상태 설정
    if (isEditing) setIsEditing(false); // 수정 상태 종료
  };

  return (
    <S.DurationLayout>
      <Divider customStyle={{ marginTop: '0.5rem' }} />
      <S.Label>예상 소요 기간은</S.Label>
      {isLoadingAI ? (
        <S.DurationLoadingWrapper>
          <IcLoading />
        </S.DurationLoadingWrapper>
      ) : isEditing || (!isConfirmed && mode === 'manual') ? (
        // 입력 필드 노출
        <S.InputContainer>
          <S.DurationInput
            type="number"
            value={duration === 0 ? '' : duration}
            onChange={handleInputChange}
            min={1}
          />
          <S.Unit>일</S.Unit>
        </S.InputContainer>
      ) : (
        // 텍스트 노출
        <S.DisplayContainer>
          <S.DurationText>{duration}</S.DurationText>
          <S.Unit>일</S.Unit>
        </S.DisplayContainer>
      )}
      {!isLoadingAI && (
        <S.BtnContainer>
          {mode === 'manual' ? (
            !isConfirmed && <Button onClick={handleConfirm}>확정하기</Button>
          ) : !isConfirmed ? (
            isEditing ? (
              <Button
                onClick={() => setIsEditing(false)}
                disabled={duration <= 0}
              >
                수정완료
              </Button>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)}>수정하기</Button>
                <Button onClick={handleConfirm}>확정하기</Button>
              </>
            )
          ) : null}
        </S.BtnContainer>
      )}
    </S.DurationLayout>
  );
};

export default DurationComponent;
