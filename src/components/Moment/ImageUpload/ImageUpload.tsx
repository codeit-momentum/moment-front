import { ChangeEvent } from 'react';
import * as S from './ImageUpload.style';
import IcUploadPreview from '../../../assets/svg/IcUploadPreview';

interface ImageUploadProps {
  image: string | null;
  handleImage: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageError: () => void;
}

const ImageUpload = ({
  image,
  handleImage,
  handleImageError,
}: ImageUploadProps) => {
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
        <S.ImageInput type="file" accept="image/*" onChange={handleImage} />
      </S.ImageInputLabel>
      <S.DescriptionSpan>사진을 첨부해 인증해주세요!</S.DescriptionSpan>
    </>
  );
};

export default ImageUpload;
