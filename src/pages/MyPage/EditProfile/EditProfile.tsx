import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import * as S from './EditProfile.style';
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import usePatchProfile from '../../../hooks/queries/myPage/usePatchProfile';
import useErrorHandler from '../../../hooks/common/useResponseMessage';
import useImageHandler from '../../../hooks/common/useImageHandler';
import { useNavigate } from 'react-router-dom';
import useGetUser from '../../../hooks/queries/myPage/useGetUser';

const EditProfile = () => {
  const { data: userData } = useGetUser();
  const [newNickname, setNewNickname] = useState<string>(userData.nickname);
  const handleClose = () => {
    navigate('/mypage');
  };
  const { handleError, openModal, setMessage, renderModal } =
    useErrorHandler(handleClose);
  const navigate = useNavigate();
  const {
    image: newImage,
    imageFile,
    handleImage,
    handleImageError,
    ImageToast,
  } = useImageHandler();
  const { mutate: patchProfile } = usePatchProfile();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      profileImage: imageFile,
      newNickname: newNickname,
    };
    patchProfile(body, {
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
    <S.EditProfileLayout>
      {renderModal()}
      <ImageToast />
      <MyPageTitle>내 정보 수정하기</MyPageTitle>

      <S.EditForm onSubmit={handleSubmit}>
        <S.Label>
          <S.PreviewImage
            src={newImage || userData.profileImageUrl}
            alt="profile"
            onError={handleImageError}
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
            <S.ProfileItemInput value={userData.email} readOnly />
          </S.InputItemContainer>
        </S.InputContainer>
        <Button type="submit">저장하기</Button>
      </S.EditForm>
    </S.EditProfileLayout>
  );
};

export default EditProfile;
