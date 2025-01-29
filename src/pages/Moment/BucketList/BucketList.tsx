import MomentHeader from '../../../components/Moment/MomentHeader/MomentHeader';
import CheckList from '../../../components/Moment/CheckList/CheckList';
import * as S from './BucketList.style';

const BucketList = () => {
  return (
    <S.BucketListLayout>
      <MomentHeader />
      <CheckList type="반복형" />
      <CheckList type="달성형" />
    </S.BucketListLayout>
  );
};

export default BucketList;
