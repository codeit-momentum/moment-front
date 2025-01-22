import MyPageTitle from '../../../components/MyPage/MyPageTitle/MyPageTitle';
import * as S from './EditProfile.style';
import React, { useState, useEffect, ChangeEvent } from 'react';
import mockImage from '../../../assets/images/mockImage.jpg';

const EditProfile = () => {
  const values = {
    nickname: '필수',
    email: 'example@gmail.com',
    image: mockImage,
  };
  const [newNickname, setNewNickname] = useState<string>(values.nickname);
  const [newImage, setNewImage] = useState<string | null>(values.image);
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

    // 미리보기 이미지 URL 생성
    setNewImage(URL.createObjectURL(newImage));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // API로 변경 요청
    e.preventDefault();
    alert('유저 정보 변경');
  };
  return (
    <S.EditProfileLayout>
      <MyPageTitle>내 정보 수정하기</MyPageTitle>

      <S.EditForm onSubmit={handleSubmit}>
        <S.Label>
          <S.PreviewImage src={newImage || values.image} alt="profile" />
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
            <S.ProfileItemInput value={values.email} readOnly />
          </S.InputItemContainer>
        </S.InputContainer>
        <S.Btn type="submit">저장하기</S.Btn>
      </S.EditForm>
    </S.EditProfileLayout>
  );
};

export default EditProfile;
