import { useState, useEffect } from 'react';
import * as S from './FrequencyBtnComponent.style';
import Button from '../../../buttons/Button';
import Divider from '../../../common/Divider/Divider';
import { frequencyOptions } from '../../../../utils/formatFrequency';
import { FrequencyType } from '../../../../types/moment/create';
import IcFrequencyButton from '../../../../assets/svg/moment/IcFrequencyButton';

interface FrequencyBtnProps {
  onNext: (frequency: FrequencyType) => void;
}

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

  const handleConfirmFrequency = () => {
    if (!selectedOption) return;

    onNext(selectedOption);
  };

  return (
    <S.FrequencyBtnLayout>
      <Divider />
      <S.FrequencyBtnTitle>모멘트의 실행 빈도는</S.FrequencyBtnTitle>
      <S.FrequencyBtnContainer>
        {frequencyOptions.map((option) => (
          <S.FrequencyBtnWrapper
            key={option.value}
            onClick={() => setSelectedOption(option.value)}
          >
            <IcFrequencyButton isSelected={selectedOption === option.value} />
            <S.FrequencyBtnLabel $isSelected={selectedOption === option.value}>
              {option.label}
            </S.FrequencyBtnLabel>
          </S.FrequencyBtnWrapper>
        ))}
      </S.FrequencyBtnContainer>
      <Button disabled={!selectedOption} onClick={handleConfirmFrequency}>
        확인
      </Button>
    </S.FrequencyBtnLayout>
  );
};

export default FrequencyBtnComponent;
