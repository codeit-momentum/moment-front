import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

interface RequestType {
  newNickname: string;
  profileImage: File | null;
}

const patchProfile = async (body: RequestType) => {
  const response = await instance.patch('/api/users/profile', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

const usePatchProfile = () => {
  return useMutation({
    mutationFn: patchProfile,
  });
};

export default usePatchProfile;
