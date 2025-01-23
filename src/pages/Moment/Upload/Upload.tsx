import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUpload from '../../../components/Moment/ImageUpload/ImageUpload';
import * as S from './Upload.style';

type UploadProps = {
  variant: 'moment' | 'bucket';
};

const subTitle = {
  moment: '모멘트를 완료하셨나요?',
  bucket: '버킷리스트를 완료하셨나요?',
};

const Upload = ({ variant }: UploadProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 모멘트 세부 정보 조회 api 필요
  // - 인증 완료 or 없는 id(4xx 에러) -> 리다이렉트 처리
  // - 유효한 경우 모멘트/버킷리스트 title 가져오기

  useEffect(() => {
    // id 에러일 때 리다이렉트 임시 구현
    if (id === 'none') {
      alert('존재하지 않는 페이지입니다.');
      navigate('/moment');
    }
  });

  return (
    <S.UploadLayout>
      <S.Header>
        {/* 아이콘으로 대체 */}
        <button
          style={{
            fontSize: '36px',
          }}
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </S.Header>
      <S.TitleContainer>
        <S.TitleSpan>
          {variant} id: {id}
        </S.TitleSpan>
        <S.SubTitleSpan>{subTitle[variant]}</S.SubTitleSpan>
      </S.TitleContainer>
      <ImageUpload />
    </S.UploadLayout>
  );
};

export default Upload;
