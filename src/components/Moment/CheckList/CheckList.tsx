import { KeyboardEvent, useEffect, useState } from 'react';
import { handleResizeHeight, setBucketState } from '../../../utils/moment';
import { BucketItemType, BucketType } from '../../../types/moment';
import usePostBucket from '../../../hooks/queries/bucketList/usePostBucket';
import usePatchBucket from '../../../hooks/queries/bucketList/usePatchBucket';
import useResponseMessage from '../../../hooks/common/useErrorHandler';
import CheckListLayout from '../ContainerLayout/ContainerLayout';
import CheckListItem from './CheckListItem/CheckListItem';
import IcCheckboxPending from '../../../assets/svg/IcCheckboxPending';
import * as S from './CheckList.style';
import useGetRepeatBucket from '../../../hooks/queries/bucketList/useGetRepeatBucket';

// 목 데이터
// const bucketlist: BucketItemType[] = [
//   {
//     id: '679c8bd744c09bba20cd248f',
//     title: '단어 500개 외우기',
//     state: 'pending',
//   },
//   { id: '679c8ad644c09bba20cd248e', title: '컴활 1급 따기', state: 'pending' },
//   { id: '3', title: '토익 800점 넘기', state: 'inProgress' },
//   { id: '4', title: '오픽 AL 따기 ', state: 'completed' },
// ];

const TypeHooks = {
  REPEAT: useGetRepeatBucket,
  ACHIEVEMENT: useGetRepeatBucket,
};

type CheckListProps = {
  type: BucketType;
};

const CheckList = ({ type }: CheckListProps) => {
  const [bucketList, setBucketList] = useState<BucketItemType[]>([]);
  const [newItem, setNewItem] = useState<string>('');
  const { handleError, setMessage, openModal, renderModal } =
    useResponseMessage();
  const { mutate: postBucket } = usePostBucket();
  const { mutate: patchBucket } = usePatchBucket();

  const useTypeHook = TypeHooks[type];
  const { data, isLoading } = useTypeHook();

  useEffect(() => {
    if (data) {
      console.log(data);
      setBucketList(data.buckets);
    }
  }, [data]);

  const hadleSubmitItem = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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
              bucketID: data.bucket.bucketID,
              content: data.bucket.content,
              isCompleted: false,
              isChallenging: false,
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

  const handleUpdateItem = (id: string, newContent: string) => {
    patchBucket(
      { id, content: newContent },
      {
        onSuccess: (data) => {
          setMessage(data.message);
          setBucketList((prev) =>
            prev.map((it) =>
              it.bucketID === id ? { ...it, content: newContent } : it,
            ),
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
    setBucketList((prev) => prev.filter((it) => it.bucketID !== id));
    // 여기서 delete api 요청
  };

  if (!data || isLoading) {
    return <div>로딩중 ...</div>;
  }

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
            onKeyDown={hadleSubmitItem}
          />
        </S.InputContainer>

        {/* 기존 버킷리스트 목록 */}
        {bucketList.map((item) => (
          <CheckListItem
            key={item.bucketID}
            id={item.bucketID}
            type={type}
            value={item.content}
            state={setBucketState(item.isCompleted, item.isChallenging)}
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
