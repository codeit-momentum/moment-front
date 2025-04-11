import * as S from './Home.style';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader';
import TodayMomentSection from '../../components/Home/TodayMomentSection/TodayMomentSection';
import Bucketlist from '../../components/Home/Bucketlist/Bucketlist';

const Home = () => {
  return (
    <S.HomeLayout>
      <HomeHeader />
      <TodayMomentSection />
      <Bucketlist />
    </S.HomeLayout>
  );
};

export default Home;
