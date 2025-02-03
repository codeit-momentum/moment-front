import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './ImageUpload.style';
import IcUploadPreview from '../../../assets/svg/IcUploadPreview';

interface ImageUploadProps {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
  setImageFile: Dispatch<SetStateAction<File | null>>;
}

const ImageUpload = ({ image, setImage, setImageFile }: ImageUploadProps) => {
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

    setImageFile(newImage);
    setImage(URL.createObjectURL(newImage));
  };

  const handleImageError = () => {
    alert('이미지 로드 중 에러가 발생했습니다.');
    setImage(null);
  };

  return (
    <>
      <S.ImageInputLabel>
        {image ? (
          <S.PreviewImage
            src={image}
            alt="preview"
            onError={handleImageError}
          />
        ) : (
          <IcUploadPreview />
        )}
        <S.ImageInput type="file" accept="image/*" onChange={handleOnChange} />
      </S.ImageInputLabel>
      <S.DescriptionSpan>사진을 첨부해 인증해주세요!</S.DescriptionSpan>
    </>
  );
};

export default ImageUpload;
