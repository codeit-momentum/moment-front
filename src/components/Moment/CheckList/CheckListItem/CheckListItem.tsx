import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ListItemType, StateType } from '../../../../types/moment';
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
  type: ListItemType;
  value: string;
  state: StateType | number;
  editState?: boolean;
  onUpdateItem: (arg0: number, arg1: string) => void;
  onDeleteItem?: (arg0: number) => void;
}

const StateIcons = {
  completed: <IcCheckboxCompleted />,
  inProgress: <IcCheckboxProcessing />,
  pending: <IcCheckboxPending />,
} as const;

const CheckListItem = ({
  id,
  type,
  value,
  state,
  editState = false,
  onUpdateItem,
  onDeleteItem = () => {},
}: CheckListItemProps) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [isEditing, setIsEditing] = useState(editState);
  const [itemValue, setItemValue] = useState(value);
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = ' 20px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleItemClick = () => {
    // 시작 전인 버킷리스트에 대해서만 모달 띄움
    if (type === 'create' || state !== 'pending' || isEditing) return;
    openModal();
  };

  const handleUpdateItem = () => {
    if (isEditing) {
      onUpdateItem(id, itemValue);
      if (type === 'create') return;
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
          onBlur={handleUpdateItem}
          onKeyDown={handleKeyPress}
          readOnly={!isEditing}
        />
      </S.CheckListItemLayout>
      {type !== 'create' && isOpen && (
        <Modal>
          <CheckListModal
            type={type}
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
