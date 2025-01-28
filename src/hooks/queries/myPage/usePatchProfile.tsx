import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const patchProfile = async (formData: FormData) => {
  const response = await instance.patch('/api/users/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.user;
};

const usePatchProfile = () => {
  return useMutation({
    mutationFn: patchProfile,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchProfile;
