import * as S from './Friend.style';
import React from 'react';
import IcSearch from '../../../assets/svg/IcSearch';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import SelectModal from '../../../components/Modal/SelectModal/SelectModal';
import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import useModal from '../../../hooks/common/useModal';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import usePostCheckFriend from '../../../hooks/queries/myPage/usePostCheckFriend';
import usePostFriend from '../../../hooks/queries/myPage/usePostFriend';
import OKModal from '../../../components/Modal/OKModal/OKModal';
import useErrorHandler from '../../../hooks/common/useResponseMessage';
import useToast from '../../../hooks/common/useToast';
import useGetFriendCode from '../../../hooks/queries/myPage/useGetFriendCode';
import Toast from '../../../components/common/Toast/Toast';

const Friend = () => {
  const { mutate: postCheckFriend } = usePostCheckFriend();
  const { mutate: postFriend } = usePostFriend();
  const [friendCode, setFriendCode] = useState<string>('');
  const [friendNickname, setFriendNickname] = useState<string>('');
  const [isFriend, setIsFriend] = useState(false);
  const { handleError, message, setMessage } = useErrorHandler();
  const [isOpen, openModal, closeModal] = useModal();
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();
  const { data: userCode } = useGetFriendCode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFriendCode(e.target.value);
  };

  const handleModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postCheckFriend(friendCode, {
      onSuccess: (data) => {
        setFriendNickname(data.nickname);
      },
      onError: (error) => {
        handleError(error);
        setIsFriend(true);
      },
      onSettled: () => {
        openModal();
      },
    });
  };

  const handlePostFriend = () => {
    postFriend(friendCode, {
      onSuccess: () => {
        setMessage('');
      },
      onError: (error) => {
        handleError(error);
      },
      onSettled: () => {
        setIsFriend(true);
      },
    });
  };

  const handleClose = () => {
    closeModal();
    setIsFriend(false);
    setFriendCode('');
  };

  return (
    <S.FriendLayout>
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
      {isOpen && (
        <Modal>
          {isFriend ? (
            <OKModal onClose={handleClose}>
              {message === '' ? (
                <>
                  <span style={{ color: '#FAED46' }}>{friendNickname}</span>님과
                  친구가 되었습니다!
                </>
              ) : (
                message
              )}
            </OKModal>
          ) : (
            <SelectModal
              type="add"
              content="상대방의 코드가 맞는지 확인해주세요..."
              onSubmit={handlePostFriend}
              onClose={handleClose}
            >
              <span style={{ color: '#FAED46' }}>{friendNickname}</span>님을
              추가하시겠습니까?
            </SelectModal>
          )}
        </Modal>
      )}
      <MyPageTitle>친구 추가하기</MyPageTitle>
      <S.SearchForm onSubmit={handleModal}>
        <S.SubtitleSpan>친구를 찾아볼까요?</S.SubtitleSpan>
        <S.InputContainer>
          <S.CodeInput value={friendCode} onChange={handleChange} />
          <S.BtnSearch type="submit">
            <IcSearch />
          </S.BtnSearch>
        </S.InputContainer>
        {friendCode.length > 8 && (
          <S.WarningSpan>
            코드는 8자리입니다.
            <br />
            확인해주세요!
          </S.WarningSpan>
        )}
      </S.SearchForm>
      <S.SubtitleSpan>나의 친구 코드</S.SubtitleSpan>
      <CopyToClipboard text={userCode}>
        <Button
          type="button"
          $customstyle={{
            width: '15rem',
            height: '4rem',
            fontSize: '16px',
            lineHeight: '20px',
          }}
          onClick={() => {
            openToast('복사가 완료되었습니다.');
          }}
        >
          {userCode}
        </Button>
      </CopyToClipboard>
      <S.InfoTextSpan>클릭 시 텍스트가 복사됩니다.</S.InfoTextSpan>
    </S.FriendLayout>
  );
};

export default Friend;
