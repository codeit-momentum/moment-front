import { Link } from 'react-router-dom';
import MomentUploadStatusLayout from '../ContainerLayout/ContainerLayout';
import IcMomentUpload from '../../../assets/svg/IcMomentUpload';
import * as S from './MomentUploadStatus.style';
import { ChallengingBucket } from '../../../types/moment';

type MomentUploadStatusProps = {
  data: ChallengingBucket[];
};

const MomentUploadStatus = ({ data }: MomentUploadStatusProps) => {
  const renderMomentItem = ({
    bucketID,
    content,
    moments: [moment],
  }: ChallengingBucket) => {
    if (!moment) {
      return (
        <S.MomentItem key={bucketID}>
          <S.MomentErrorSpan>
            {content}의<br />
            모멘트가 없습니다.
          </S.MomentErrorSpan>
        </S.MomentItem>
      );
    }

    return (
      <S.MomentItem key={moment.momentID}>
        {moment.photoUrl ? (
          <S.MomentImage src={moment.photoUrl} alt="인증이미지" />
        ) : (
          <Link to={`upload/${moment.momentID}`}>
            <IcMomentUpload />
          </Link>
        )}
        <S.MomentTitleSpan>{moment.content}</S.MomentTitleSpan>
      </S.MomentItem>
    );
  };

  const renderEmptyState = () => (
    <S.MomentItem>
      <Link to={'bucket'}>
        <IcMomentUpload />
      </Link>
      <S.MomentTitleSpan>새로운 모멘트 등록하기</S.MomentTitleSpan>
    </S.MomentItem>
  );

  return (
    <MomentUploadStatusLayout
      title="모멘트 인증하기"
      containerStyle={{ padding: '2rem 1.7rem' }}
      titleStyle={{ padding: '0.5rem 1.9rem', marginBottom: '2rem' }}
    >
      <S.MomentContainer>
        {data.length > 0 ? data.map(renderMomentItem) : renderEmptyState()}
      </S.MomentContainer>
    </MomentUploadStatusLayout>
  );
};

export default MomentUploadStatus;
