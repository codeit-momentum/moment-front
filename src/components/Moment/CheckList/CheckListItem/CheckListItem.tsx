import { useState, KeyboardEvent } from 'react';
import { CheckListVariant, StateType } from '../../../../types/moment';
import { handleResizeHeight } from '../../../../utils/moment';
import useModal from '../../../../hooks/common/useModal';
import Modal from '../../../Modal/Modal';
import CheckListModal from '../../../Modal/CheckListModal/CheckListModal';
import IcCheckboxProcessing from '../../../../assets/svg/IcCheckboxProcessing';
import IcCheckboxCompleted from '../../../../assets/svg/IcCheckboxCompleted';
import IcCheckboxPending from '../../../../assets/svg/IcCheckboxPending';
import * as S from './CheckListItem.style';

interface CheckListItemProps {
  id: number;
  variant: CheckListVariant;
  value: string;
  state: StateType | number;
  onUpdateItem: (arg0: number, arg1: string) => void;
}

const StateIcons = {
  completed: <IcCheckboxCompleted />,
  inProgress: <IcCheckboxProcessing />,
  pending: <IcCheckboxPending />,
} as const;

const CheckListItem = ({
  id,
  variant,
  value,
  state,
  onUpdateItem,
}: CheckListItemProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [isEditing, setIsEditing] = useState(false);
  const [itemValue, setItemValue] = useState(value);

  const handleItemClick = () => {
    if (isEditing) return;
    openModal();
  };

  const handleEditClick = () => {
    setIsEditing(true);
    closeModal();
  };

  const handleUpdateItem = () => {
    if (isEditing) {
      onUpdateItem(id, itemValue);
      setIsEditing(false);
      alert(`${itemValue}저장`);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleUpdateItem();
    }
  };

  return (
    <>
      <S.CheckListItemLayout>
        <S.CheckBoxWrapper>
          {typeof state === 'number' ? state : StateIcons[state]}
        </S.CheckBoxWrapper>
        <S.ListItemInput
          name="title"
          value={itemValue}
          onClick={handleItemClick}
          onChange={(e) => setItemValue(e.target.value)}
          onInput={handleResizeHeight}
          onBlur={handleUpdateItem}
          onKeyDown={handleKeyPress}
          readOnly={!isEditing}
        />
      </S.CheckListItemLayout>
      {isOpen && (
        <Modal>
          <CheckListModal
            variant={variant}
            title={itemValue}
            onClose={() => closeModal()}
            onClickEdit={handleEditClick}
          />
        </Modal>
      )}
    </>
  );
};
export default CheckListItem;
