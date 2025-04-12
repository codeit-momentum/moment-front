import * as S from './Home.style';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader';
import CurrnetMoment from '../../components/Home/TodayMomentSection/CurrentMoment';
import Bucketlist from '../../components/Home/Bucketlist/Bucketlist';

const Home = () => {
  return (
    <S.HomeLayout>
      <HomeHeader />
      <CurrnetMoment />
      <Bucketlist />
    </S.HomeLayout>
  );
};

export default Home;
