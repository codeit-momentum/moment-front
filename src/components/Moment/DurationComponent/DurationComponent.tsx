import { useState, useEffect } from 'react';
import * as S from './DurationComponent.style';
import { useEditable } from '../../../hooks/useEditable';
import { ModeType } from '../../../types/modeType';

/**
 * DurationComponent Props
 * - mode : 자동/수동 모드 구분
 * -initialDuration : API에서 받아온 초기 예상 소요 기간(자동 모드의 경우)
 * -onEdit : 수정된 기간을 상위 컴포넌트에 전달하는 콜백 함수
 */
interface DurationProps {
  mode: ModeType;
  initialDuration?: number | null;
  onEdit: (duration: number) => void;
}

/**
 * DurationComponent
 * - 자동/수동 모드에 따라 초기 상태와 UI 분기 처리
 * - 예상 소요 기간을 표시하거나 수정할 수 있는 컴포넌트
 * - 수정모드 (isEditing)에 따라 입력 필드와 텍스트가 전환됨 -> 수정 중일 때는 확정하기 불가
 */
const DurationComponent = ({
  mode,
  initialDuration = null,
  onEdit,
}: DurationProps) => {
  const { isEditing, toggleEditing } = useEditable(); //수정 상태 관리
  const [inputValue, setInputValue] = useState<string>(
    initialDuration?.toString() || '',
  );
  const [isConfirmed, setIsConfirmed] = useState(false); // 확정 상태 관리

  //자동 모드에서 API 데이터 로딩이 완료된 경우 초깃값 설정
  useEffect(() => {
    if (mode === 'auto' && initialDuration !== null) {
      setInputValue(initialDuration.toString()); //문자열로 변환하여 설정
    }
  }, [mode, initialDuration]);

  /**
   * handleInputChange
   * - 입력값을 상태에 문자열로 저장
   * - 숫자 유효성 검사
   */
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
    toggleEditing(); //수정 모드 종료
  };

  // 확정하기 핸들러
  const handleConfirm = () => {
    const duration = Number(inputValue);
    if (duration < 1) {
      alert('1일 이상으로 설정해주세요.');
      return;
    }
    onEdit(duration);
    setIsConfirmed(true); //확정 상태 설정
    toggleEditing(); //수정모드 종료
  };

  return (
    <S.DurationContainer>
      <S.Divider />
      <S.Label>예상 소요 기간은</S.Label>
      <S.InputWarpper>
        <S.DurationInput
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          min={1}
          readOnly={!isEditing}
        />
        <S.Unit>일</S.Unit>
      </S.InputWarpper>
      <S.BtnContainer>
        {!isConfirmed && (
          <>
            {isEditing ? (
              // 수정 중일 때는 수정완료와 확정하기 버튼 표시
              <>
                <S.Btn onClick={handleEditComplete}>수정완료</S.Btn>
                <S.Btn onClick={handleConfirm}>확정하기</S.Btn>
              </>
            ) : (
              // 수정 중이 아닐 때는 수정하기 버튼만 표시
              <S.Btn onClick={toggleEditing}>수정하기</S.Btn>
            )}
          </>
        )}
      </S.BtnContainer>
    </S.DurationContainer>
  );
};

export default DurationComponent;
