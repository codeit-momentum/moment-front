import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface PatchMomentUploadParams {
  id: string;
  image: string;
}

const patchMomentUpload = async ({ id, image }: PatchMomentUploadParams) => {
  const formData = new FormData();
  formData.append('photoUrl', image);

  const response = await instance.patch(`/api/bucket/moments/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const usePatchMomentUpload = () => {
  return useMutation({
    mutationFn: patchMomentUpload,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchMomentUpload;
