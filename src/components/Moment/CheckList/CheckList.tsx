import { KeyboardEvent, useState } from 'react';
import { handleResizeHeight } from '../../../utils/moment';
import { BucketListType, BucketType } from '../../../types/moment';
import CheckListLayout from '../ContainerLayout/ContainerLayout';
import CheckListItem from './CheckListItem/CheckListItem';
import IcCheckboxPending from '../../../assets/svg/IcCheckboxPending';
import * as S from './CheckList.style';
import usePostBucket from '../../../hooks/queries/bucketList/usePostBucket';
import useResponseMessage from '../../../hooks/common/useErrorHandler';
import usePatchBucket from '../../../hooks/queries/bucketList/usePatchBucket';

// 목 데이터
const bucketlist: BucketListType[] = [
  {
    id: '679c8ad644c09bba20cd248e',
    title: '단어 500개 외우기',
    state: 'pending',
  },
  { id: '2', title: '컴활 1급 따기', state: 'pending' },
  { id: '3', title: '토익 800점 넘기', state: 'inProgress' },
  { id: '4', title: '오픽 AL 따기 ', state: 'completed' },
];

type CheckListProps = {
  type: BucketType;
};

const CheckList = ({ type }: CheckListProps) => {
  const [bucketList, setBucketList] = useState<BucketListType[]>(bucketlist);
  const [newItem, setNewItem] = useState<string>('');
  const { mutate: postBucket } = usePostBucket();
  const { mutate: patchBucket } = usePatchBucket();
  const { handleError, setMessage, openModal, renderModal } =
    useResponseMessage();

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const trimmedItem = newItem.trim();
      if (!trimmedItem) return;

      const body = {
        type,
        content: trimmedItem,
      };
      postBucket(body, {
        onSuccess: (data) => {
          setMessage(data.message);
          setBucketList((prev) => [
            {
              id: data.bucket.bucketID,
              title: data.bucket.content,
              state: 'pending',
            },
            ...prev,
          ]);
        },
        onError: (error) => {
          handleError(error);
        },
        onSettled: () => {
          openModal();

          setNewItem('');
          const target = e.target as HTMLTextAreaElement;
          target.style.height = '20px';
        },
      });
    }
  };

  const handleUpdateItem = (id: string, newTitle: string) => {
    patchBucket(
      { id, content: newTitle },
      {
        onSuccess: (data) => {
          setMessage(data.message);
          setBucketList((prev) =>
            prev.map((it) => (it.id === id ? { ...it, title: newTitle } : it)),
          );
        },
        onError: (error) => {
          handleError(error);
        },
        onSettled: () => {
          openModal();
        },
      },
    );
  };

  const handleDeleteItem = (id: string) => {
    setBucketList((prev) => prev.filter((it) => it.id !== id));
    // 여기서 delete api 요청
  };

  return (
    <>
      <CheckListLayout title={type === 'REPEAT' ? '반복형' : '달성형'}>
        {/* 새 버킷리스트 추가 */}
        <S.InputContainer>
          <S.CheckBoxWrapper>
            <IcCheckboxPending />
          </S.CheckBoxWrapper>

          <S.NewItemInput
            value={newItem}
            maxLength={30}
            onChange={(e) => setNewItem(e.target.value)}
            onInput={handleResizeHeight}
            onKeyDown={handleKeyPress}
          />
        </S.InputContainer>

        {/* 기존 버킷리스트 목록 */}
        {bucketList.map((item) => (
          <CheckListItem
            key={item.id}
            id={item.id}
            type={type}
            value={item.title}
            state={item.state}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </CheckListLayout>
      {renderModal()}
    </>
  );
};

export default CheckList;
