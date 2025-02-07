import { useState, useEffect } from 'react';
import * as S from './DurationComponent.style';
import { useEditable } from '../../../hooks/useEditable';
import { ModeType } from '../../../types/moment/modeType';
import Button from '../../Button/Button';
import IcLoading from '../../../assets/svg/IcLoading';
import Divider from '../../Divider/Divider';
import { CommonDiv } from '../../Divider/Divider.style';

interface DurationProps {
  mode: ModeType; // 'auto' 또는 'manual'
  initialDuration?: number | null; // 자동 모드의 초기 값
  onEdit: (duration: number) => void; // 수정 및 확정 시 상위 컴포넌트로 전달
  isLoading: boolean; //로딩 상태
}

/**
 * DurationComponent
 * - 자동/수동 모드에 따라 초기 상태와 UI 분기 처리
 * - 예상 소요 기간을 표시하거나 수정할 수 있는 컴포넌트
 */
const DurationComponent = ({
  mode,
  initialDuration = null,
  onEdit,
  isLoading,
}: DurationProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { isEditing, toggleEditing } = useEditable();
  const [isConfirmed, setIsConfirmed] = useState(false); // 확정 상태 관리

  // 자동 모드 초기 값 설정
  useEffect(() => {
    console.log(
      '📌 DurationComponent - initialDuration 업데이트됨:',
      initialDuration,
    );
    console.log('📌 DurationComponent - inputValue 업데이트 전:', inputValue);

    if (mode === 'auto' && initialDuration !== null) {
      setInputValue(initialDuration.toString());
      console.log(
        '📌 DurationComponent - inputValue 업데이트 후:',
        initialDuration.toString(),
      );
    }
  }, [mode, initialDuration]);

  //입력값 변경 핸들러
  const handleInputChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  // 수정완료 핸들러
  const handleEditComplete = () => {
    const duration = Number(inputValue);
    if (duration < 1) {
      alert('1일 이상으로 설정해주세요.');
      return;
    }
    toggleEditing(); // 수정 상태 종료
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    const duration = Number(inputValue);
    if (duration < 1) {
      alert('1일 이상으로 설정해주세요.');
      return;
    }
    onEdit(duration); //부모컴포넌트에 전달
    setIsConfirmed(true); //확정 상태 설정
    if (isEditing) toggleEditing(); // 수정 상태 종료
  };

  return (
    <S.DurationLayout>
      <Divider customStyle={{ marginTop: '1.5rem' }} />
      <S.Label>예상 소요 기간은</S.Label>
      {isLoading ? (
        <S.DurationLoadingWrapper>
          <IcLoading />
        </S.DurationLoadingWrapper>
      ) : isEditing || (!isConfirmed && mode === 'manual') ? (
        // 입력 필드 노출
        <S.InputContainer>
          <S.DurationInput
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            min={1}
          />
          <S.Unit>일</S.Unit>
        </S.InputContainer>
      ) : (
        // 텍스트 노출
        <S.DisplayContainer>
          <S.DurationText>{inputValue}</S.DurationText>
          <S.Unit>일</S.Unit>
        </S.DisplayContainer>
      )}
      {!isLoading && (
        <S.BtnContainer>
          {mode === 'manual' ? (
            // 수동 모드: 확정하기 버튼만 표시
            !isConfirmed && <Button onClick={handleConfirm}>확정하기</Button>
          ) : // 자동 모드: 수정/수정완료/확정하기 버튼 표시
          !isConfirmed ? (
            isEditing ? (
              <Button onClick={handleEditComplete}>수정완료</Button>
            ) : (
              <>
                <Button onClick={toggleEditing}>수정하기</Button>
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
