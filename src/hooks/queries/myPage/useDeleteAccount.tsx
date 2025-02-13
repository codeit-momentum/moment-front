import { useMutation } from '@tanstack/react-query';
import instance from '../../../apis/client';

const deleteAccount = async ({}) => {
  const response = await instance.delete('/api/users');

  return response.data;
};

const useDeleteAccount = () => {
  return useMutation({
    mutationFn: deleteAccount,
  });
};

export default useDeleteAccount;
