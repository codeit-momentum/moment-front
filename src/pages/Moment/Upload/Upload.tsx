import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useModal from '../../../hooks/common/useModal';
import ImageUpload from '../../../components/Moment/ImageUpload/ImageUpload';
import Modal from '../../../components/Modal/Modal';
import OKModal from '../../../components/Modal/OKModal/OKModal';
import Button from '../../../components/Button/Button';
import IcBack from '../../../assets/svg/IcBack';
import * as S from './Upload.style';
import useGetBucketDetail from '../../../hooks/queries/bucketList/useGetBucketDetail';
import usePatchBucketUpload from '../../../hooks/queries/bucketList/usePatchBucketUpload';
import useResponseMessage from '../../../hooks/common/useResponseMessage';

const mockData = {
  moment: {
    id: Number(new Date()),
    isComplete: false,
    title: '뜨개질 10코 뜨기',
  },
  bucket: {
    id: Number(new Date()),
    isComplete: false,
    title: '번지점프 하기',
  },
};

type UploadProps = {
  variant: 'moment' | 'bucket';
};

const Upload = ({ variant }: UploadProps) => {
  const { id } = useParams() as { id: string };
  const [isOpen, openModal, closeModal] = useModal();
  const [image, setImage] = useState<string | null>(null);
  const { mutate: patchBucketUpload } = usePatchBucketUpload();
  const {
    handleError,
    openModal: openErrorModal,
    renderModal,
  } = useResponseMessage();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetBucketDetail(id);

  useEffect(() => {
    if (
      isError ||
      data?.bucket.isChallenging ||
      data?.bucket.isCompleted ||
      data?.bucket.type === 'REPEAT'
    ) {
      alert('존재하지 않는 페이지입니다.');
      navigate('/moment');
    }
  }, [data, isError, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    patchBucketUpload(
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
      <S.TitleSpan>{data.bucket.content}</S.TitleSpan>
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
      {isOpen &&
        (variant === 'moment' ? (
          <Modal>
            <OKModal
              title={mockData[variant].title}
              mainText=" 완료!"
              subText="새로운 모멘트를 인증했네요"
              onClose={handleCloseModal}
            />
          </Modal>
        ) : (
          <Modal>
            <OKModal
              title={data.bucket.content}
              mainText=" 완료!"
              subText="새로운 버킷리스트를 달성했네요"
              onClose={handleCloseModal}
            />
          </Modal>
        ))}
      {renderModal()}
    </S.UploadLayout>
  );
};

export default Upload;
