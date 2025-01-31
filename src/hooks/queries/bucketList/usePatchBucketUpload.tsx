import { useMutation } from '@tanstack/react-query';
import { BucketResponse } from '../../../types/moment';
import instance from '../../../apis/client';

interface PatchBucketUploadParams {
  id: string;
  image: string;
}

const patchBucketUpload = async ({
  id,
  image,
}: PatchBucketUploadParams): Promise<BucketResponse> => {
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
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchBucketUpload;
