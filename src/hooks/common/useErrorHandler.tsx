import axios from 'axios';
import { useState } from 'react';
import useModal from './useModal';
import Modal from '../../components/Modal/Modal';
import OKModal from '../../components/Modal/OKModal/OKModal';

const useResponseMessage = () => {
  const [message, setMessage] = useState('');
  const [isOpen, openModal, closeModal] = useModal();

  const handleError = (error: Error) => {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data.message ??
        error.response?.data.error?.message ??
        '서버 연결에 실패하였습니다.';
      setMessage(errorMessage);
    }
  };

  const renderModal = () => {
    return (
      isOpen && (
        <Modal>
          <OKModal mainText={message} onClose={closeModal} />
        </Modal>
      )
    );
  };
  return {
    handleError,
    message,
    setMessage,
    openModal,
    renderModal,
  };
};

export default useResponseMessage;
