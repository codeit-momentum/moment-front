import { Link } from 'react-router-dom';
import MomentUploadStatusLayout from '../ContainerLayout/ContainerLayout';
import IcMomentUpload from '../../../assets/svg/moment/IcMomentUpload';
import * as S from './MomentUploadStatus.style';
import { ChallengingBucket } from '../../../types/moment';

type MomentUploadStatusProps = {
  data: ChallengingBucket[];
};

const MomentUploadStatus = ({ data }: MomentUploadStatusProps) => {
  return (
    <MomentUploadStatusLayout title="모멘트 인증하기">
      <S.MomentContainer>
        {data.length > 0 ? (
          data.map(({ moments: [moment] }) => (
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
          ))
        ) : (
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
