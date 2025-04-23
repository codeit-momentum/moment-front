import { useState, useEffect, ChangeEvent } from 'react';
import * as S from './DurationComponent.style';
import { autoDuration } from '../../../../apis/AI/autoDuration';
import { ModeType } from '../../../../types/moment/create';
import EditConfirmButtons from '../EditConfirmButtons/EditConfirmButtons';
import IcLoading from '../../../../assets/svg/common/IcLoading';
import Divider from '../../../common/Divider/Divider';
import useToast from '../../../../hooks/common/useToast';
import Toast from '../../../common/Toast/Toast';

interface DurationProps {
  goal: string;
  mode: ModeType;
  onEdit: (duration: number) => void;
}

const DurationComponent = ({ goal, mode, onEdit }: DurationProps) => {
  const [duration, setDuration] = useState<number>(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();

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
    } else {
      setIsEditing(true);
    }
  }, [mode, goal]);

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDuration(newValue === '' ? 0 : Number(newValue));
  };

  const handleConfirmDuration = () => {
    if (duration < 1) {
      openToast('1일 이상으로 설정해주세요!');
      return false;
    }

    onEdit(duration);
    return true;
  };

  return (
    <S.DurationLayout>
      <Divider customStyle={{ marginTop: '0.5rem' }} />
      <S.Label>예상 소요 기간은</S.Label>
      {isLoadingAI ? (
        <S.DurationLoadingWrapper>
          <IcLoading />
        </S.DurationLoadingWrapper>
      ) : (
        <>
          <S.InputContainer>
            {isEditing ? (
              <S.DurationInput
                type="number"
                value={duration === 0 ? '' : duration}
                onChange={handleDurationChange}
                min={1}
              />
            ) : (
              <span>{duration}</span>
            )}
            <span>일</span>
          </S.InputContainer>
          <EditConfirmButtons
            mode={mode}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onConfirm={handleConfirmDuration}
          />
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.DurationLayout>
  );
};

export default DurationComponent;
