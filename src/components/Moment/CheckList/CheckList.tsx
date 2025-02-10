import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  BUCKET_MAX_LENGTH,
  handleResizeHeight,
  setBucketState,
} from '../../../utils/moment';
import { BucketType } from '../../../types/moment';
import usePostBucket from '../../../hooks/queries/bucketList/usePostBucket';
import usePatchBucket from '../../../hooks/queries/bucketList/usePatchBucket';
import useResponseMessage from '../../../hooks/common/useResponseMessage';
import CheckListLayout from '../ContainerLayout/ContainerLayout';
import CheckListItem from './CheckListItem/CheckListItem';
import IcCheckboxPending from '../../../assets/svg/IcCheckboxPending';
import * as S from './CheckList.style';
import useGetRepeatBucket from '../../../hooks/queries/bucketList/useGetRepeatBucket';
import useGetAchievementBucket from '../../../hooks/queries/bucketList/useGetAchievementBucket';
import useDeleteBucket from '../../../hooks/queries/bucketList/useDeleteBucket';
import useToast from '../../../hooks/common/useToast';

const TypeHooks = {
  REPEAT: useGetRepeatBucket,
  ACHIEVEMENT: useGetAchievementBucket,
};

type CheckListProps = {
  type: BucketType;
};

const CheckList = ({ type }: CheckListProps) => {
  const [newItem, setNewItem] = useState<string>('');
  const { handleError, setMessage, openModal, renderModal } =
    useResponseMessage();
  const { mutate: postBucket } = usePostBucket();
  const { mutate: patchBucket } = usePatchBucket();
  const { mutate: deleteBucket } = useDeleteBucket();
  const { Toast, openToast } = useToast();

  const useTypeHook = TypeHooks[type];
  const { data } = useTypeHook();
  console.log(data);

  const hadleSubmitItem = (target: HTMLTextAreaElement) => {
    const trimmedItem = newItem.trim();
    if (!trimmedItem) return;

    const body = {
      type,
      content: trimmedItem,
    };
    postBucket(body, {
      onSuccess: (data) => {
        setMessage(data.message);
      },
      onError: (error) => {
        handleError(error);
      },
      onSettled: () => {
        openModal();

        setNewItem('');
        target.style.height = '20px';
      },
    });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (e.target instanceof HTMLTextAreaElement) {
        hadleSubmitItem(e.target);
      }
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > BUCKET_MAX_LENGTH) {
      openToast(`최대 ${BUCKET_MAX_LENGTH}자만 작성 가능합니다!`);
      return;
    }

    setNewItem(e.target.value);
  };

  const handleUpdateItem = (id: string, newContent: string) => {
    patchBucket(
      { id, content: newContent },
      {
        onSuccess: (data) => {
          setMessage(data.message);
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
    deleteBucket(id, {
      onSuccess: (data) => {
        setMessage(data.message);
      },
      onError: (error) => {
        handleError(error);
      },
      onSettled: () => {
        openModal();
      },
    });
  };

  return (
    <CheckListLayout title={type === 'REPEAT' ? '반복형' : '달성형'}>
      {/* 새 버킷리스트 추가 */}
      <S.InputContainer>
        <S.CheckBoxWrapper>
          <IcCheckboxPending />
        </S.CheckBoxWrapper>

        <S.NewItemInput
          value={newItem}
          maxLength={30}
          onChange={handleChangeInput}
          onInput={handleResizeHeight}
          onKeyDown={handleKeyPress}
          onBlur={({ target }) => hadleSubmitItem(target)}
        />
      </S.InputContainer>

      {/* 기존 버킷리스트 목록 */}
      {data.buckets.map((item) => (
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
      {renderModal()}
      <Toast />
    </CheckListLayout>
  );
};

export default CheckList;
