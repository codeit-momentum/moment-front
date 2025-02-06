import { ChangeEvent, useEffect, useState } from 'react';
import useToast from './useToast';

const useImageHandler = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { Toast, openToast } = useToast();

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files?.[0];
    if (!newImage) return;

    if (!newImage.type.startsWith('image/')) {
      openToast('이미지 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    if (newImage.size > 500 * 1024 * 1024) {
      openToast('500MB 이하의 이미지만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    setImageFile(newImage);
    setImage(URL.createObjectURL(newImage));
  };

  const handleImageError = () => {
    openToast('이미지 로드 중 에러가 발생했습니다.');
    setImage(null);
  };

  return { image, imageFile, handleImage, handleImageError, ImageToast: Toast };
};

export default useImageHandler;
