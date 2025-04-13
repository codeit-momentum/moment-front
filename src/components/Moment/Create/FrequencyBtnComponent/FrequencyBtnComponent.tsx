import { useState, useEffect } from 'react';
import * as S from './FrequencyBtnComponent.style';
import Button from '../../../buttons/Button';
import Divider from '../../../common/Divider/Divider';
import BtnFrequency from '../../../buttons/Frequency/BtnFrequency';
import { frequencyOptions } from '../../../../utils/formatFrequency';
import { FrequencyType } from '../../../../types/moment/create';
/**
 * FrequencyBtn Props
 * - options: 버튼에 표시될 옵션 목록
 * - onSelect: 선택된 옵션의 값을 상위 컴포넌트에 전달하는 콜백
 * - onNext: "다음" 버튼 클릭 시 상위 컴포넌트에 알리는 콜백
 */
interface FrequencyBtnProps {
  onNext: (frequency: FrequencyType) => void; // 다음페이지 이동 콜백
}

/**
 * FrequencyBtnComponent
 * - 실행 빈도를 선택할 수 있는 버튼 그룹 컴포넌트
 * - 선택된 옵션을 강조 표시, "다음" 버튼을 통해 다음 페이지로 이동 가능
 */
const FrequencyBtnComponent = ({ onNext }: FrequencyBtnProps) => {
  const [selectedOption, setSelectedOption] = useState<FrequencyType | null>(
    null,
  );

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleNext = () => {
    if (selectedOption) {
      onNext(selectedOption); // 상위에서 전달된 onNext 호출
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
            <BtnFrequency
              key={option.value}
              isSelected={selectedOption === option.value}
              onClick={() => setSelectedOption(option.value)}
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
