import { Link } from 'react-router-dom';
import MomentUploadStatusLayout from '../ContainerLayout/ContainerLayout';
import IcMomentUpload from '../../../assets/svg/IcMomentUpload';
import * as S from './MomentUploadStatus.style';
import { ChallengingBucket } from '../../../types/moment';

type MomentUploadStatusProps = {
  data: ChallengingBucket[];
};

const MomentUploadStatus = ({ data }: MomentUploadStatusProps) => {
  return (
    <MomentUploadStatusLayout
      title="모멘트 인증하기"
      containerStyle={{ padding: '2rem 1.7rem' }}
      titleStyle={{ padding: '0.5rem 1.9rem', marginBottom: '2rem' }}
    >
      <S.MomentContainer>
        {data.length > 0 ? (
          data.map((bucket) => (
            <S.MomentItem key={bucket.bucketID}>
              {bucket.moments[0].photoUrl ? (
                <S.MomentImage
                  src={bucket.moments[0].photoUrl}
                  alt="인증이미지"
                />
              ) : (
                <Link to={`upload/${bucket.moments[0].momentID}`}>
                  <IcMomentUpload />
                </Link>
              )}
              <S.MomentTitleSpan>{bucket.moments[0].content}</S.MomentTitleSpan>
            </S.MomentItem>
          ))
        ) : (
          // 모멘트가 없는 경우
          <S.MomentItem>
            <Link to={'bucket'}>
              <IcMomentUpload />
            </Link>
            <S.MomentTitleSpan>새로운 모멘트 등록하기</S.MomentTitleSpan>
          </S.MomentItem>
        )}
      </S.MomentContainer>
    </MomentUploadStatusLayout>
  );
};

export default MomentUploadStatus;
