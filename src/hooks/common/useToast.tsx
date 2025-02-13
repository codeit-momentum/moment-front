import { useState } from 'react';

const useToast = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const openToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  return {
    openToast,
    setIsToastOpen,
    isToastOpen,
    toastMessage,
  };
};

export default useToast;
