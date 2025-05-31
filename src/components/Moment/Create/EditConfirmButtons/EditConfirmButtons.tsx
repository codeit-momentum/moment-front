import { useState } from 'react';
import { ModeType } from '../../../../types/moment/create';
import Button from '../../../buttons/Button';
import * as S from './EditConfirmButtons.style';

interface EditConfirmButtonsProps {
  mode: ModeType;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  onConfirm: () => boolean;
}

const EditConfirmButtons = ({
  mode,
  isEditing,
  setIsEditing,
  onConfirm,
}: EditConfirmButtonsProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (onConfirm()) {
      setIsEditing(false);
      setIsConfirmed(true);
    }
  };

  if (isConfirmed) {
    return null;
  }

  return (
    <S.EditConfirmButtonsLayout>
      {mode === 'manual' ? (
        <Button onClick={handleConfirm}>확정하기</Button>
      ) : isEditing ? (
        <Button onClick={() => setIsEditing(false)}>수정완료</Button>
      ) : (
        <>
          <Button onClick={() => setIsEditing(true)}>수정하기</Button>
          <Button onClick={handleConfirm}>확정하기</Button>
        </>
      )}
    </S.EditConfirmButtonsLayout>
  );
};

export default EditConfirmButtons;
