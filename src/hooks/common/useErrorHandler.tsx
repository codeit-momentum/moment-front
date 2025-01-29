import axios from 'axios';
import { useState } from 'react';

const useErrorHandler = () => {
  const [error, setError] = useState('');

  const handleError = (error: Error) => {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data.message;
      setError(errorMessage);
    }
  };
  return {
    handleError,
    error,
  };
};

export default useErrorHandler;
