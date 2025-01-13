import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB/GNB';
import useMobile from '../hooks/useMobile';

const LayoutWithGNB = () => {
  useMobile();

  return (
    <>
      <Outlet />
      <GNB />
    </>
  );
};

export default LayoutWithGNB;
