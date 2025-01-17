import React, { useState } from 'react';
import * as S from './DurationComponent.style';
import { useEditable } from '../../../hooks/useEditable';

/**
 * DurationComponent Props
 * -duration : 현재 설정된 예상 소요 기간 (일 단위)
 * -onEdit : 수정된 기간을 상위 컴포넌트에 전달하는 콜백 함수
 */
interface DurationProps {
  duration: number | null;
  onEdit: (newDuration: number) => void;
}

/**
 * DurationComponent
 * - 예상 소요 기간을 표시하거나 수정할 수 있는 컴포넌트
 * - 수정모드 (isEditing)에 따라 입력 필드와 텍스트가 전환됨
 */
export const DurationComponent: React.FC<DurationProps> = ({
  duration,
  onEdit,
}) => {
  const { isEditing, toggleEditing } = useEditable(); //수정 상태 관리
  const [inputValue, setInputValue] = useState(duration || 0);

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
    onEdit(inputValue);
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
          <S.DurationText>{duration ? `${duration}` : '미정'}</S.DurationText>
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
