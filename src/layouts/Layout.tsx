import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import useMobile from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useMobile();

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
