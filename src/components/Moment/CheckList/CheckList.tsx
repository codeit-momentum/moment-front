import { KeyboardEvent, useState } from 'react';
import { handleResizeHeight } from '../../../utils/moment';
import { BucketListType, CheckListVariant } from '../../../types/moment';
import CheckListItem from './CheckListItem/CheckListItem';
import IcCheckboxPending from '../../../assets/svg/IcCheckboxPending';
import * as S from './CheckList.style';

// 목 데이터
const bucketlist: BucketListType[] = [
  { id: 1, title: '단어 500개 외우기', state: 'pending' },
  { id: 2, title: '컴활 1급 따기', state: 'pending' },
  { id: 3, title: '토익 800점 넘기', state: 'inProgress' },
  { id: 4, title: '오픽 AL 따기 ', state: 'completed' },
];

type CheckListProps = {
  variant: CheckListVariant;
};

const CheckList = ({ variant }: CheckListProps) => {
  const [bucketList, setBucketList] = useState<BucketListType[]>(bucketlist);
  const [newItem, setNewItem] = useState<string>('');

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // isComposing: 한글 입력 시 입력 중인 글자(마지막 글자)에 대해
    // 이벤트 핸들러가 중복 실행되는 문제를 방지하기 위해 사용
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const trimmedItem = newItem.trim();
      if (!trimmedItem) return;

      setBucketList((prev) => [
        // 임의 id 생성
        { id: Number(new Date()), title: trimmedItem, state: 'pending' },
        ...prev,
      ]);
      alert(`${trimmedItem} 저장`);
      setNewItem('');

      const target = e.target as HTMLTextAreaElement;
      target.style.height = '20px';
    }
  };

  const handleUpdateItem = (id: number, newTitle: string) => {
    setBucketList((prev) =>
      prev.map((it) => (it.id === id ? { ...it, title: newTitle } : it)),
    );
  };

  return (
    <S.CheckListLayout>
      <S.TitleSpan>{variant}</S.TitleSpan>
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
          variant={variant}
          value={item.title}
          state={item.state}
          onUpdateItem={handleUpdateItem}
        />
      ))}
    </S.CheckListLayout>
  );
};

export default CheckList;
