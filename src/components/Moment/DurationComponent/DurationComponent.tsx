import React, { useState, useEffect } from 'react';
import * as S from './DurationComponent.style';
import { useEditable } from '../../../hooks/useEditable';

/**
 * DurationComponent Props
 * - mode : 'auto' | 'manual' - 자동/수동 모드 구분
 * -initialDuration : API에서 받아온 초기 예상 소요 기간(자동 모드의 경우)
 * -onEdit : 수정된 기간을 상위 컴포넌트에 전달하는 콜백 함수
 */
interface DurationProps {
  mode: 'auto' | 'manual';
  initialDuration?: number | null;
  onEdit: (duration: number) => void;
}

/**
 * DurationComponent
 * - 자동/수동 모드에 따라 초기 상태와 UI 분기 처리
 * - 예상 소요 기간을 표시하거나 수정할 수 있는 컴포넌트
 * - 수정모드 (isEditing)에 따라 입력 필드와 텍스트가 전환됨 -> 수정 중일 때는 확정하기 불가
 */
export const DurationComponent: React.FC<DurationProps> = ({
  mode,
  initialDuration = null,
  onEdit,
}) => {
  const { isEditing, toggleEditing } = useEditable(); //수정 상태 관리
  const [inputValue, setInputValue] = useState(initialDuration || 0);

  //자동 모드에서 API 데이터 로딩이 완료된 경우 초깃값 설정
  useEffect(() => {
    if (mode === 'auto' && initialDuration !== null) {
      setInputValue(initialDuration);
    }
  }, [mode, initialDuration]);

  /**
   * handleSave
   * - 입력된 값을 저장하고 수정 모드를 종료
   * - 유효성 검사: 1일 이상으로 설정해야 함
   */
  const handleSave = () => {
    if (inputValue < 1) {
      alert('1일 이상으로 설정해주세요.');
      return;
    }
    onEdit(inputValue); //수정된 값 전달
    toggleEditing(); //수정 상태 종료
  };

  return (
    <S.DurationContainer>
      <S.Label>예상 소요 기간</S.Label>
      {isEditing ? (
        <S.InputWarpper>
          <S.DurationInput
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            min={1}
          />
          <S.Unit>일</S.Unit>
        </S.InputWarpper>
      ) : (
        <S.DisplayWarpper>
          <S.DurationText>
            {inputValue ? `${inputValue}` : '미정'}
          </S.DurationText>
          <S.Unit>일</S.Unit>
        </S.DisplayWarpper>
      )}
      <S.BtnContainer>
        <S.ActionButton onClick={toggleEditing}>
          {isEditing ? '수정완료' : '수정하기'}
        </S.ActionButton>
        <S.ActionButton onClick={handleSave} disabled={!isEditing}>
          확정하기
        </S.ActionButton>
      </S.BtnContainer>
    </S.DurationContainer>
  );
};
