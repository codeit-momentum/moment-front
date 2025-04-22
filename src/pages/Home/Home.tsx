import * as S from './Home.style';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader';
import CurrnetMoment from '../../components/Home/TodayMomentSection/CurrentMoment';
import BucketAchievement from '../../components/Home/BucketAchievement/BucketAchievement';

const Home = () => {
  return (
    <S.HomeLayout>
      <HomeHeader />
      <CurrnetMoment />
      <BucketAchievement />
    </S.HomeLayout>
  );
};

export default Home;
