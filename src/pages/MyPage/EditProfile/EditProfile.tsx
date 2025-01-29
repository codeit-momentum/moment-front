import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import * as S from './EditProfile.style';
import React, { useState, useEffect, ChangeEvent, useContext } from 'react';
import UserInfoContext from '../../../store/User/UserContext';
import Button from '../../../components/Button/Button';
import usePatchProfile from '../../../hooks/queries/myPage/usePatchProfile';
import useErrorHandler from '../../../hooks/common/useErrorHandler';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/Modal/Modal';
import OKModal from '../../../components/Modal/OKModal/OKModal';

const EditProfile = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const { userInfo } = useContext(UserInfoContext);
  const [newNickname, setNewNickname] = useState<string>(userInfo.nickname);
  const [file, setFile] = useState<File | null>(null);
  const [newImage, setNewImage] = useState<string | null>(
    userInfo.profileImage,
  );
  const { handleError, error } = useErrorHandler();
  const { mutate: patchProfile } = usePatchProfile();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  useEffect(() => {
    return () => {
      if (newImage) URL.revokeObjectURL(newImage);
    };
  }, [newImage]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files?.[0];
    if (!newImage) return;

    if (!newImage.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능');
      e.target.value = '';
      return;
    }
    setFile(newImage);
    setNewImage(URL.createObjectURL(newImage));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      profileImage: file,
      newNickname: newNickname,
    };
    patchProfile(body, {
      onSuccess: () => {
        alert('프로필과 닉네임이 변경되었습니다.');
      },
      onError: (error) => {
        openModal();
        handleError(error);
      },
    });
  };

  return (
    <S.EditProfileLayout>
      {isOpen && (
        <Modal>
          <OKModal title="" mainText={error} onClose={closeModal} />
        </Modal>
      )}
      <MyPageTitle>내 정보 수정하기</MyPageTitle>

      <S.EditForm onSubmit={handleSubmit}>
        <S.Label>
          <S.PreviewImage
            src={newImage || userInfo.profileImage}
            alt="profile"
          />
          <S.ImageInput type="file" accept="image/*" onChange={handleImage} />
        </S.Label>
        <S.InputContainer>
          <S.InputItemContainer>
            <S.InputTitleSpan>닉네임</S.InputTitleSpan>
            <S.ProfileItemInput
              value={newNickname}
              onChange={handleNicknameChange}
            />
          </S.InputItemContainer>
          <S.InputItemContainer>
            <S.InputTitleSpan>이메일</S.InputTitleSpan>
            <S.ProfileItemInput value={userInfo.email} readOnly />
          </S.InputItemContainer>
        </S.InputContainer>
        <Button type="submit">저장하기</Button>
      </S.EditForm>
    </S.EditProfileLayout>
  );
};

export default EditProfile;
