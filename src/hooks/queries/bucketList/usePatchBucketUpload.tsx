import { useMutation } from '@tanstack/react-query';
import { UpdateBucketResponse, UploadParams } from '../../../types/moment';
import instance from '../../../apis/client';

const patchBucketUpload = async ({
  id,
  imageFile,
}: UploadParams): Promise<UpdateBucketResponse> => {
  const formData = new FormData();
  formData.append('photoUrl', imageFile);

  const response = await instance.patch(
    `/api/bucket/${id}/achievement-photo `,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

const usePatchBucketUpload = () => {
  return useMutation({
    mutationFn: patchBucketUpload,
  });
};

export default usePatchBucketUpload;
