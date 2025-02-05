import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BucketType, StateType } from '../../../../types/moment';
import useModal from '../../../../hooks/common/useModal';
import Modal from '../../../Modal/Modal';
import CheckListModal from '../../../Modal/CheckListModal/CheckListModal';
import IcCheckboxProcessing from '../../../../assets/svg/IcCheckboxProcessing';
import IcCheckboxCompleted from '../../../../assets/svg/IcCheckboxCompleted';
import IcCheckboxPending from '../../../../assets/svg/IcCheckboxPending';
import * as S from './CheckListItem.style';

interface BucketTypeProps {
  type: BucketType;
  id: string;
  state: StateType;
  value: string;
  editState?: boolean;
  onUpdateItem: (id: string, value: string) => void;
  onDeleteItem: (id: string) => void;
}

interface CreateTypeProps {
  type: '생성형';
  id: number;
  state: number;
  value: string;
  editState: boolean;
  onUpdateItem: (index: number, value: string) => void;
  onDeleteItem?: () => void;
}

type CheckListItemProps = BucketTypeProps | CreateTypeProps;

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
  onDeleteItem,
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
  }, [itemValue]);

  const handleItemClick = () => {
    if (isEditing || state !== 'pending') return;
    openModal();
  };

  const handleUpdateItem = () => {
    if (!isEditing) return;

    if (type === '생성형') {
      onUpdateItem(id, itemValue);
    } else {
      const trimmedValue = itemValue.trim();
      if (!trimmedValue) return;

      onUpdateItem(id, itemValue);
      setIsEditing(false);
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
    if (type === '생성형') return;
    onDeleteItem(id);
    closeModal();
  };

  const handleCreateClick = () => {
    // 여기서 버킷리스트 id 넘겨야 하는데,,, 어떻게 넘겨야 할지 지윤님과 논의 필요
    navigate(`/moment/select-mode/${id}`);
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
          ref={textareaRef}
          onClick={handleItemClick}
          onChange={(e) => setItemValue(e.target.value)}
          onBlur={handleUpdateItem}
          onKeyDown={handleKeyPress}
          readOnly={!isEditing}
          maxLength={30}
        />
      </S.CheckListItemLayout>
      {type !== '생성형' && isOpen && (
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
