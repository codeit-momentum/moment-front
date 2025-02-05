import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import * as S from './EditProfile.style';
import React, { useState, useEffect, ChangeEvent, useContext } from 'react';
import UserInfoContext from '../../../store/User/UserContext';
import Button from '../../../components/Button/Button';
import usePatchProfile from '../../../hooks/queries/myPage/usePatchProfile';
import useErrorHandler from '../../../hooks/common/useResponseMessage';

const EditProfile = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [newNickname, setNewNickname] = useState<string>(userInfo.nickname);
  const [file, setFile] = useState<File | null>(null);
  const [newImage, setNewImage] = useState<string | null>(
    userInfo.profileImage,
  );
  const { handleError, setMessage, openModal, renderModal } = useErrorHandler();
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
