import IcSearch from '../../../assets/svg/IcSearch';
import Modal from '../../../components/Modal/Modal';
import SelectModal from '../../../components/Modal/SelectModal/SelectModal';
import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import useModal from '../../../hooks/common/useModal';
import * as S from './Friend.style';
import { useState } from 'react';
import React from 'react';

const Friend = () => {
  const [friendCode, setFriendCode] = useState<string>('');
  const [isOpen, openModal, closeModal] = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFriendCode(e.target.value);
  };
  const handleSearchFriend = (e: React.FormEvent<HTMLFormElement>) => {
    //친구 검색 api
    e.preventDefault();
    alert('친구 검색');
  };
  const handleModal = () => {
    openModal();
  };
  const handlePostFriend = () => {
    alert('친구 추가 하기');
  };

  return (
    <S.FriendLayout>
      {isOpen && (
        <Modal>
          <SelectModal
            content="상대방의 코드가 맞는지 확인해주세요..."
            onSubmit={handlePostFriend}
            onClose={closeModal}
          >
            손윤지님을 추가하시겠습니까?
          </SelectModal>
        </Modal>
      )}
      <MyPageTitle>친구 추가하기</MyPageTitle>
      <S.SearchForm onSubmit={handleSearchFriend}>
        <S.SubtitleSpan>친구를 찾아볼까요?</S.SubtitleSpan>
        <S.InputContainer>
          <S.CodeInput value={friendCode} onChange={handleChange} />
          <S.BtnSearch type="button" onClick={handleModal}>
            <IcSearch />
          </S.BtnSearch>
        </S.InputContainer>
        {
          //추후 수정 예정
          friendCode.length < 8 && (
            <S.WarningSpan>
              코드는 8자리입니다.
              <br />
              확인해주세요!
            </S.WarningSpan>
          )
        }
      </S.SearchForm>
      <S.SubtitleSpan>나의 친구 코드</S.SubtitleSpan>
      <S.CodeBox>dsadsada</S.CodeBox>
      <S.InfoTextSpan>클릭 시 텍스트가 복사됩니다.</S.InfoTextSpan>
    </S.FriendLayout>
  );
};

export default Friend;
