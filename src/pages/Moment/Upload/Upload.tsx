import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useModal from '../../../hooks/common/useModal';
import ImageUpload from '../../../components/Moment/ImageUpload/ImageUpload';
import Modal from '../../../components/Modal/Modal';
import OKModal from '../../../components/Modal/OKModal/OKModal';
import Button from '../../../components/Button/Button';
import IcBack from '../../../assets/svg/IcBack';
import * as S from './Upload.style';

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
  const [isOpen, openModal, closeModal] = useModal();
  const [image, setImage] = useState<string | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();

  // 모멘트 세부 정보 조회 api 필요
  // - 인증 완료 or 없는 id(4xx 에러) -> 리다이렉트 처리
  // - 유효한 경우 모멘트/버킷리스트 title 가져오기

  useEffect(() => {
    // id 에러일 때 리다이렉트 임시 구현
    if (id === 'none' || mockData[variant].isComplete) {
      alert('존재하지 않는 페이지입니다.');
      navigate('/moment');
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
    if (variant === 'bucket') {
      navigate('/moment/bucket');
    } else {
      navigate('/moment');
    }
  };

  return (
    <S.UploadLayout>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <IcBack />
        </S.BackButton>
      </S.Header>
      <S.TitleSpan>{mockData[variant].title}</S.TitleSpan>
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
              title={mockData[variant].title}
              mainText=" 완료!"
              subText="새로운 버킷리스트를 달성했네요"
              onClose={handleCloseModal}
            />
          </Modal>
        ))}
    </S.UploadLayout>
  );
};

export default Upload;
