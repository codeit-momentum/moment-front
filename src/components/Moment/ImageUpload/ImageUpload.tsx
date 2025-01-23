import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ImageUpload.style';

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // 할당된 URL 메모리 해제
  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files?.[0];
    if (!newImage) return;

    if (!newImage.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능');
      e.target.value = '';
      return;
    }

    // 미리보기 이미지 URL 생성
    setImage(URL.createObjectURL(newImage));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 인증 API 연결
    alert('인증이 완료되었습니다.');
    navigate(-1);
  };

  return (
    <S.ImageUploadLayout onSubmit={handleOnSubmit}>
      <S.ImageInputLabel>
        {image ? (
          <S.PreviewImage src={image} alt="preview" />
        ) : (
          <S.PreviewPlaceholder>이미지 미리보기</S.PreviewPlaceholder>
        )}
        <S.ImageInput type="file" accept="image/*" onChange={handleOnChange} />
      </S.ImageInputLabel>
      <S.DescriptionSpan>사진을 첨부해 인증해주세요!</S.DescriptionSpan>
      <S.UploadButton type="submit" disabled={!image}>
        인증하기
      </S.UploadButton>
    </S.ImageUploadLayout>
  );
};

export default ImageUpload;
