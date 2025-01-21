import * as S from './Home.style';
import Header from '../../components/Home/Header/Header';
import TodayMomentSection from '../../components/Home/TodayMomentSection/TodayMomentSection';
import Bucketlist from '../../components/Home/Bucketlist/Bucketlist';

const Home = () => {
  // Mock 데이터: 실제 백엔드 fetch 대체 가능
  const fetchYear = () => {
    return new Date().getFullYear(); // 현재 연도 반환
  };

  const year = fetchYear(); // 연도 가져오기

  return (
    <S.HomeLayout>
      <Header />
      <TodayMomentSection />
      <Bucketlist progress={50} year={year} />
    </S.HomeLayout>
  );
};

export default Home;
