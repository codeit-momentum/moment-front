import * as S from './Friend.style';
import React from 'react';
import axios from 'axios';
import IcSearch from '../../../assets/svg/IcSearch';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import SelectModal from '../../../components/Modal/SelectModal/SelectModal';
import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import useModal from '../../../hooks/common/useModal';
import { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import UserInfoContext from '../../../store/User/UserContext';
import usePostCheckFriend from '../../../hooks/queries/myPage/usePostCheckFriend';
import usePostFriend from '../../../hooks/queries/myPage/usePostFriend';
import OKModal from '../../../components/Modal/OKModal/OKModal';

const Friend = () => {
  const { userInfo } = useContext(UserInfoContext);
  const { mutate: postCheckFriend } = usePostCheckFriend();
  const { mutate: postFriend } = usePostFriend();
  const [friendCode, setFriendCode] = useState<string>('');
  const [friendNickname, setFriendNickname] = useState<string>('');
  const [isFriend, setIsFriend] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, openModal, closeModal] = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFriendCode(e.target.value);
  };

  const handleModal = () => {
    postCheckFriend(friendCode, {
      onSuccess: (data) => {
        setFriendNickname(data.nickname);
      },
      onError: (error: Error) => {
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data.message;
          setError(errorMessage);
        }
      },
    });
    openModal();
  };

  const handlePostFriend = () => {
    postFriend(friendCode, {
      onError: (error: Error) => {
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data.message;
          setError(errorMessage);
        }
      },
      onSettled: () => {
        setIsFriend(true);
      },
    });
  };

  const handleClose = () => {
    closeModal();
    setIsFriend(false);
  };

  return (
    <S.FriendLayout>
      {isOpen && (
        <Modal>
          {isFriend ? (
            <OKModal
              title=""
              mainText={
                error === ''
                  ? `${friendNickname}님과 친구가 되었습니다!`
                  : error
              }
              onClose={handleClose}
            />
          ) : (
            <SelectModal
              content="상대방의 코드가 맞는지 확인해주세요..."
              onSubmit={handlePostFriend}
              onClose={handleClose}
            >
              {friendNickname}님을 추가하시겠습니까?
            </SelectModal>
          )}
        </Modal>
      )}
      <MyPageTitle>친구 추가하기</MyPageTitle>
      <S.SearchForm>
        <S.SubtitleSpan>친구를 찾아볼까요?</S.SubtitleSpan>
        <S.InputContainer>
          <S.CodeInput value={friendCode} onChange={handleChange} />
          <S.BtnSearch type="button" onClick={handleModal}>
            <IcSearch />
          </S.BtnSearch>
        </S.InputContainer>
        {
          //추후 수정 예정
          friendCode.length > 8 && (
            <S.WarningSpan>
              코드는 8자리입니다.
              <br />
              확인해주세요!
            </S.WarningSpan>
          )
        }
      </S.SearchForm>
      <S.SubtitleSpan>나의 친구 코드</S.SubtitleSpan>
      <CopyToClipboard
        text={userInfo.friendCode}
        onCopy={() => alert('코드가 복사되었습니다.')}
      >
        <Button
          type="button"
          $customstyle={{
            width: '15rem',
            height: '4rem',
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {userInfo.friendCode}
        </Button>
      </CopyToClipboard>
      <S.InfoTextSpan>클릭 시 텍스트가 복사됩니다.</S.InfoTextSpan>
    </S.FriendLayout>
  );
};

export default Friend;
