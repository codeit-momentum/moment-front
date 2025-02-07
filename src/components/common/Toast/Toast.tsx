import * as S from './Toast.style';
import React, { useEffect } from 'react';

interface ToastProps {
  children: React.ReactNode;
  setToast: (toast: boolean) => void;
}

const Toast = ({ children, setToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);
  return <S.ToastLayout>{children}</S.ToastLayout>;
};

export default Toast;
