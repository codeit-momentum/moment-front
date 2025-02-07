import * as S from './Home.style';
import Header from '../../components/Home/Header/Header';
import TodayMomentSection from '../../components/Home/TodayMomentSection/TodayMomentSection';
import Bucketlist from '../../components/Home/Bucketlist/Bucketlist';

const Home = () => {
  return (
    <S.HomeLayout>
      <Header />
      <TodayMomentSection />
      <Bucketlist progress={50} />
    </S.HomeLayout>
  );
};

export default Home;
