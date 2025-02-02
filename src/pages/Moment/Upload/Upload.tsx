import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useModal from '../../../hooks/common/useModal';
import ImageUpload from '../../../components/Moment/ImageUpload/ImageUpload';
import Modal from '../../../components/Modal/Modal';
import OKModal from '../../../components/Modal/OKModal/OKModal';
import Button from '../../../components/Button/Button';
import IcBack from '../../../assets/svg/IcBack';
import * as S from './Upload.style';
import useResponseMessage from '../../../hooks/common/useErrorHandler';
import useUpload from '../../../hooks/moment/useUpload';
import { UploadType } from '../../../types/moment';

type UploadProps = {
  variant: UploadType;
};

const Upload = ({ variant }: UploadProps) => {
  const { id } = useParams() as { id: string };
  const [isOpen, openModal, closeModal] = useModal();
  const [image, setImage] = useState<string | null>(null);
  const {
    handleError,
    openModal: openErrorModal,
    renderModal,
  } = useResponseMessage();
  const navigate = useNavigate();
  const { data, isLoading, isError, patchUpload } = useUpload(variant, id);

  useEffect(() => {
    if (isError) {
      alert('존재하지 않는 페이지입니다.');
      navigate('/moment');
    }
  }, [data, isError, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    patchUpload(
      { id, image },
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

  // 임시 구현
  if (isLoading || !data) {
    return <div>로딩중 ... </div>;
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
        <ImageUpload image={image} setImage={setImage} />
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
    </S.UploadLayout>
  );
};

export default Upload;
