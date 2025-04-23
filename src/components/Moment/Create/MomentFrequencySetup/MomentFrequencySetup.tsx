import { useState, useEffect } from 'react';
import { frequencyOptions } from '../../../../utils/formatFrequency';
import { FrequencyType } from '../../../../types/moment/create';
import Button from '../../../buttons/Button';
import Divider from '../../../common/Divider/Divider';
import IcFrequencyButton from '../../../../assets/svg/moment/IcFrequencyButton';
import * as S from './MomentFrequencySetup.style';

interface MomentFrequencySetupProps {
  onNext: (frequency: FrequencyType) => void;
}

const MomentFrequencySetup = ({ onNext }: MomentFrequencySetupProps) => {
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
    <S.MomentFrequencySetupLayout>
      <Divider />
      <S.FrequencyTitle>모멘트의 실행 빈도는</S.FrequencyTitle>
      <S.FrequencyButtonContainer>
        {frequencyOptions.map((option) => (
          <S.FrequencyButtonWrapper
            key={option.value}
            onClick={() => setSelectedOption(option.value)}
          >
            <IcFrequencyButton isSelected={selectedOption === option.value} />
            <S.FrequencyButtonLabel
              $isSelected={selectedOption === option.value}
            >
              {option.label}
            </S.FrequencyButtonLabel>
          </S.FrequencyButtonWrapper>
        ))}
      </S.FrequencyButtonContainer>
      <Button disabled={!selectedOption} onClick={handleConfirmFrequency}>
        확인
      </Button>
    </S.MomentFrequencySetupLayout>
  );
};

export default MomentFrequencySetup;
