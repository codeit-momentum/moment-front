import { useState } from 'react';
import * as S from './FrequencyBtnComponent.style';
import Button from '../../Button/Button';
import Divider from '../../Divider/Divider';
import FrequentBtn from '../../FrequenctBtn/FrequentBtn';
import formatFrequency from '../../../utils/formatFrequency';
/**
 * FrequencyBtn Props
 * - options: 버튼에 표시될 옵션 목록
 * - onSelect: 선택된 옵션의 값을 상위 컴포넌트에 전달하는 콜백
 * - onNext: "다음" 버튼 클릭 시 상위 컴포넌트에 알리는 콜백
 */
interface FrequencyBtnProps {
  onSelect: (selected: string) => void; // 옵션 선택 콜백
  onNext: () => void; // 다음페이지 이동 콜백
}

/**
 * FrequencyBtnComponent
 * - 실행 빈도를 선택할 수 있는 버튼 그룹 컴포넌트
 * - 선택된 옵션을 강조 표시, "다음" 버튼을 통해 다음 페이지로 이동 가능
 */
const FrequencyBtnComponent = ({ onSelect, onNext }: FrequencyBtnProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // 기존 formatFrequency를 이용해서 frequencyOptions 변환
  const frequencyValues = ['daily', 'every2days', 'weekly', 'monthly'];
  const frequencyOptions = frequencyValues.map((value) => ({
    label: formatFrequency(value), // 기존 유틸 함수 사용
    value,
  }));

  /**
   * handleSelect
   * - 선택된 옵션을 상태에 저장하고, 상위 컴포넌트에 전달
   */
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const handleNext = () => {
    console.log('Next 버튼 클릭됨');
    if (selectedOption) {
      onNext(); // 상위에서 전달된 onNext 호출
    } else {
      alert('실행 빈도를 선택해주세요!');
    }
  };

  return (
    <S.FrequencyBtnLayout>
      <Divider />
      <S.Label>모멘트의 실행 빈도는</S.Label>
      <S.FrequencyBtnContainer>
        <S.FrequencyBtnGrid>
          {frequencyOptions.map((option) => (
            <FrequentBtn
              key={option.value}
              isSelected={selectedOption === option.value}
              onClick={() => handleSelect(option.value)}
              label={option.label}
            />
          ))}
        </S.FrequencyBtnGrid>
      </S.FrequencyBtnContainer>
      <S.BtnContainer>
        <Button disabled={!selectedOption} onClick={handleNext}>
          확인
        </Button>
      </S.BtnContainer>
    </S.FrequencyBtnLayout>
  );
};

export default FrequencyBtnComponent;
