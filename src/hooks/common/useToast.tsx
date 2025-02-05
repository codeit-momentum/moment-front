import { useState } from 'react';
import ToastComponent from '../../components/common/Toast/Toast';

const useToast = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const openToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  const Toast = () =>
    isToastOpen ? (
      <ToastComponent setToast={setIsToastOpen}>{toastMessage}</ToastComponent>
    ) : null;

  return {
    Toast,
    openToast,
  };
};

export default useToast;
