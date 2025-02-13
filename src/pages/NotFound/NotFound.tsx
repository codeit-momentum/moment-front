import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import * as S from './NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <S.NotFoundLayout>
      <S.TitleSpan>4 0 4</S.TitleSpan>
      <S.ContentContainer>
        <S.ContentSpan>죄송합니다.</S.ContentSpan>
        <S.SubcontentSpan>
          존재하지 않는 주소를 입력하셨거나,
          <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </S.SubcontentSpan>
      </S.ContentContainer>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </Button>
    </S.NotFoundLayout>
  );
};

export default NotFound;
