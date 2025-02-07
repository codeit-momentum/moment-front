import { useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useModal from '../../../hooks/common/useModal';
import ImageUpload from '../../../components/Moment/ImageUpload/ImageUpload';
import Modal from '../../../components/Modal/Modal';
import OKModal from '../../../components/Modal/OKModal/OKModal';
import Button from '../../../components/Button/Button';
import IcBack from '../../../assets/svg/IcBack';
import * as S from './Upload.style';
import useResponseMessage from '../../../hooks/common/useResponseMessage';
import useUpload from '../../../hooks/moment/useUpload';
import { UploadType } from '../../../types/moment';
import useImageHandler from '../../../hooks/common/useImageHandler';
import Fallback from '../../Fallback/Fallback';

type UploadProps = {
  variant: UploadType;
};

const Upload = ({ variant }: UploadProps) => {
  const { id } = useParams() as { id: string };
  const [isOpen, openModal, closeModal] = useModal();
  const { image, imageFile, handleImage, handleImageError, ImageToast } =
    useImageHandler();
  const {
    handleError,
    openModal: openErrorModal,
    renderModal,
  } = useResponseMessage();
  const { data, isLoading, isError, patchUpload } = useUpload(variant, id);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      alert('존재하지 않는 페이지입니다.');
      navigate('/moment');
    }
  }, [data, isError, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) return;

    patchUpload(
      { id, imageFile },
      {
        onSuccess: openModal,
        onError: (error) => {
          handleError(error);
          openErrorModal();
        },
      },
    );
  };

  const handleCloseModal = () => {
    closeModal();
    if (variant === 'bucket') {
      navigate('/moment/bucket');
    } else {
      navigate('/moment');
    }
  };

  if (isLoading || !data) {
    return <Fallback />;
  }

  return (
    <S.UploadLayout>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <IcBack />
        </S.BackButton>
      </S.Header>
      <S.TitleSpan>{data.content}</S.TitleSpan>
      <S.ImageUploadLayout onSubmit={handleSubmit}>
        <ImageUpload
          image={image}
          handleImage={handleImage}
          handleImageError={handleImageError}
        />
        <Button
          disabled={!image}
          type="submit"
          $customstyle={{ width: '13rem' }}
        >
          인증하기
        </Button>
      </S.ImageUploadLayout>
      {isOpen && (
        <Modal>
          <OKModal
            title={data.content}
            mainText=" 완료!"
            subText={
              variant === 'moment'
                ? '새로운 모멘트를 인증했네요'
                : '새로운 버킷리스트를 달성했네요'
            }
            onClose={handleCloseModal}
          />
        </Modal>
      )}
      {renderModal()}
      <ImageToast />
    </S.UploadLayout>
  );
};

export default Upload;
