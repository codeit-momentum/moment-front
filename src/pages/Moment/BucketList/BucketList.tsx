import MomentHeader from '../../../components/Moment/MomentHeader/MomentHeader';
import CheckList from '../../../components/Moment/CheckList/CheckList';
import * as S from './BucketList.style';

const BucketList = () => {
  return (
    <S.BucketListLayout>
      <MomentHeader />
      <CheckList type="REPEAT" />
      <CheckList type="ACHIEVEMENT" />
    </S.BucketListLayout>
  );
};

export default BucketList;
