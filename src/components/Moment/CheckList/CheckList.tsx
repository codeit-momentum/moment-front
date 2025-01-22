import { FormEvent, useState } from 'react';
import { BucketListType, CheckListVariant } from '../../../types/moment';
import * as S from './CheckList.style';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../Modal/Modal';
import CheckListModal from '../../Modal/CheckListModal/CheckListModal';

// 목 데이터
const bucketlist: BucketListType[] = [
  { id: 1, title: '단어 500개 외우기', state: 'pending' },
  { id: 2, title: '컴활 1급 따기', state: 'pending' },
  { id: 3, title: '토익 800점 넘기', state: 'inProgress' },
  { id: 4, title: '오픽 AL 따기 ', state: 'completed' },
];

// SVG 아이콘으로 수정
const StateIcons = {
  completed: '완료',
  inProgress: '진행',
  pending: '',
} as const;

type CheckListProps = {
  variant: CheckListVariant;
};

const CheckList = ({ variant }: CheckListProps) => {
  const [bucketList, setBucketList] = useState<BucketListType[]>(bucketlist);
  const [newItem, setNewItem] = useState<string>('');
  const [isOpen, openModal, closeModal] = useModal();
  const [selectedItem, setSelectedItem] = useState<BucketListType | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    setBucketList((prev) => [
      // 임의 id 생성
      { id: Number(new Date()), title: newItem, state: 'pending' },
      ...prev,
    ]);
    setNewItem('');
  };

  const onSubmitEdit = (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = String(formData.get('title'));
    if (!newTitle.trim()) return;

    setBucketList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
    setEditingId(null);
    alert(`${newTitle} 저장`);
  };

  const handleOnClick = (item: BucketListType) => {
    if (editingId === item.id) return;

    setSelectedItem(item);
    openModal();
  };

  const handleOnEdit = () => {
    setEditingId(selectedItem?.id ?? null);
    closeModal();
  };

  const handleOnClose = () => {
    setSelectedItem(null);
    closeModal();
  };

  return (
    <>
      <S.CheckListLayout>
        <S.TitleSpan>{variant}</S.TitleSpan>

        {/* 새 버킷리스트 추가 */}
        <S.ListItemWrapper onSubmit={handleAddItem}>
          <S.CheckBox />
          <S.ListItemInput
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </S.ListItemWrapper>

        {/* 기존 버킷리스트 목록 */}
        {bucketList.map((item) => (
          <S.ListItemWrapper
            key={item.id}
            onSubmit={(e) => onSubmitEdit(e, item.id)}
          >
            <S.CheckBox>{StateIcons[item.state]}</S.CheckBox>
            <S.ListItemInput
              name="title"
              type="text"
              defaultValue={item.title}
              readOnly={editingId !== item.id}
              onClick={() => handleOnClick(item)}
            />
          </S.ListItemWrapper>
        ))}
      </S.CheckListLayout>
      {isOpen && selectedItem && (
        <Modal>
          <CheckListModal
            variant={variant}
            title={selectedItem.title}
            onClose={handleOnClose}
            onEdit={handleOnEdit}
          />
        </Modal>
      )}
    </>
  );
};

export default CheckList;
