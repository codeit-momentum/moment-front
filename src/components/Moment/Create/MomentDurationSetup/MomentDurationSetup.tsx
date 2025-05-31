import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeType } from '../../../../types/moment/create';
import useGetAIDuration from '../../../../hooks/queries/moment/useGetAIDuration';
import useToast from '../../../../hooks/common/useToast';
import EditConfirmButtons from '../EditConfirmButtons/EditConfirmButtons';
import Divider from '../../../common/Divider/Divider';
import Toast from '../../../common/Toast/Toast';
import IcLoading from '../../../../assets/svg/common/IcLoading';
import * as S from './MomentDurationSetup.style';

interface MomentDurationSetupProps {
  goal: string;
  mode: ModeType;
  onDurationConfirm: (duration: number) => void;
}

const MomentDurationSetup = ({
  goal,
  mode,
  onDurationConfirm,
}: MomentDurationSetupProps) => {
  const [duration, setDuration] = useState(0);
  const [isEditing, setIsEditing] = useState(mode === 'manual');
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();
  const {
    data: aiDuration,
    isLoading: isLoadingAI,
    isError,
  } = useGetAIDuration({ goal, mode });
  const navigate = useNavigate();

  useEffect(() => {
    if (aiDuration) {
      setDuration(aiDuration);
    }

    if (isError) {
      alert(
        'AI 예상 소요 기간 생성 중 오류가 발생했습니다. 다시 시도해주세요.',
      );
      navigate('/moment/bucket');
    }
  }, [aiDuration, isError, navigate]);

  const handleChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDuration(newValue === '' ? 0 : Number(newValue));
  };

  const handleConfirmDuration = () => {
    if (duration < 1) {
      openToast('1일 이상으로 설정해주세요!');
      return false;
    }

    onDurationConfirm(duration);
    return true;
  };

  return (
    <S.MomentDurationSetupLayout>
      <Divider />
      <S.DurationTitle>예상 소요 기간은</S.DurationTitle>
      {isLoadingAI ? (
        <S.DurationLoadingWrapper>
          <IcLoading />
        </S.DurationLoadingWrapper>
      ) : (
        <>
          {isEditing ? (
            <S.DurationInputContainer>
              <S.DurationInput
                type="number"
                value={duration === 0 ? '' : duration}
                onChange={handleChangeDuration}
                min="1"
              />
              <S.DurationTextSpan>일</S.DurationTextSpan>
            </S.DurationInputContainer>
          ) : (
            <S.DurationTextSpan>{duration}일</S.DurationTextSpan>
          )}
          <EditConfirmButtons
            mode={mode}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onConfirm={handleConfirmDuration}
          />
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.MomentDurationSetupLayout>
  );
};

export default MomentDurationSetup;
