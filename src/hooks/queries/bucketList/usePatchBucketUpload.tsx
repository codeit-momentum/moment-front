import { useMutation } from '@tanstack/react-query';
import { UpdateBucketResponse } from '../../../types/moment';
import instance from '../../../apis/client';

interface PatchBucketUploadParams {
  id: string;
  image: string;
}

const patchBucketUpload = async ({
  id,
  image,
}: PatchBucketUploadParams): Promise<UpdateBucketResponse> => {
  const formData = new FormData();
  formData.append('photoUrl', image);

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
