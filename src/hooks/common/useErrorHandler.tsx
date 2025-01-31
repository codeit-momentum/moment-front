import axios from 'axios';
import { useState } from 'react';

const useResponseMessage = () => {
  const [message, setMessage] = useState('');

  const handleError = (error: Error) => {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data.message;
      setMessage(errorMessage);
    }
  };
  return {
    handleError,
    message,
    setMessage,
  };
};

export default useResponseMessage;
