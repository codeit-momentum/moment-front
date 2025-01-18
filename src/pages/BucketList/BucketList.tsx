import MomentTabBar from '../../components/Moment/MomentTabBar/MomentTabBar';
import CheckList from '../../components/Moment/CheckList/CheckList';
import * as S from './BucketList.style';

const BucketList = () => {
  return (
    <S.BucketListLayout>
      <MomentTabBar />
      <CheckList />
    </S.BucketListLayout>
  );
};

export default BucketList;
