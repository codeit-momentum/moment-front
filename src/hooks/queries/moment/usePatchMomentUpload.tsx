import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface PatchMomentUploadParams {
  id: string;
  imageFile: File;
}

const patchMomentUpload = async ({
  id,
  imageFile,
}: PatchMomentUploadParams) => {
  const formData = new FormData();
  formData.append('photoUrl', imageFile);
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
  });
};

export default usePatchMomentUpload;
