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
import { useNavigate } from 'react-router-dom';

interface CheckListItemProps {
  id: number;
  variant: CheckListVariant;
  value: string;
  state: StateType | number;
  onUpdateItem: (arg0: number, arg1: string) => void;
  onDeleteItem: (arg0: number) => void;
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
  onDeleteItem,
}: CheckListItemProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [isEditing, setIsEditing] = useState(false);
  const [itemValue, setItemValue] = useState(value);
  const navigate = useNavigate();

  const handleItemClick = () => {
    // 시작 전인 버킷리스트에 대해서만 모달 띄움
    if (state !== 'pending' || isEditing) return;
    openModal();
  };

  const handleEditClick = () => {
    setIsEditing(true);
    closeModal();
  };

  const hadleDeleteClick = () => {
    onDeleteItem(id);
    closeModal();
  };

  const handleCreateClick = () => {
    // 여기서 버킷리스트 id 넘겨야 하는데,,, 어떻게 넘겨야 할지 지윤님과 논의 필요
    navigate('/moment/select-mode');
  };

  const handleUploadClick = () => {
    navigate(`upload/${id}`);
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
            onClose={closeModal}
            onClickEdit={handleEditClick}
            onClickDelete={hadleDeleteClick}
            onClickCreate={handleCreateClick}
            onClickUpload={handleUploadClick}
          />
        </Modal>
      )}
    </>
  );
};
export default CheckListItem;
