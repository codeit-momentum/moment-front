import MomentHeader from '../../components/Moment/MomentHeader/MomentHeader';
import MomentAchievementStatus from '../../components/Moment/MomentAchievementStatus/MomentAchievementStatus';
import MomentUploadStatus from '../../components/Moment/MomentUploadStatus/MomentUploadStatus';
import useGetChallengingMoment from '../../hooks/queries/moment/useGetChallengingMoment';
import * as S from './Moment.style';
import { useEffect, useState } from 'react';
import { ChallengingBucket } from '../../types/moment';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/Modal/Modal';
import SelectModal from '../../components/Modal/SelectModal/SelectModal';
import { useNavigate } from 'react-router-dom';

const Moment = () => {
  const { data } = useGetChallengingMoment();
  const [isOpen, openModal, closeModal] = useModal();
  const [buckets, setBuckets] = useState<ChallengingBucket[]>([]);
  const [errorBucket, setErrorBucket] = useState<ChallengingBucket | null>(
    null,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const filteredData = data.data.filter((bucket) => {
      if (bucket.moments.length === 0) {
        setErrorBucket(bucket);
        openModal();
        return false;
      } else {
        return true;
      }
    });
    setBuckets(filteredData);
  }, [data]);

  return (
    <S.MomentLayout>
      <MomentHeader />
      <MomentAchievementStatus data={buckets} />
      <MomentUploadStatus data={buckets} />
      {isOpen && (
        <Modal>
          <SelectModal
            type="add"
            content="모멘트 생성을 다시 시도해보시겠어요?"
            onClose={closeModal}
            onSubmit={() =>
              navigate(`/moment/select-mode/${errorBucket?.bucketID}`)
            }
          >
            <span style={{ color: '#FAED46' }}>{errorBucket?.content}</span>
            <br />
            모멘트를 불러올 수 없습니다.
          </SelectModal>
        </Modal>
      )}
    </S.MomentLayout>
  );
};

export default Moment;
