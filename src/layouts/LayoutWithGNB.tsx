import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB/GNB';

const LayoutWithGNB = () => {
  return (
    <>
      <Outlet />
      <GNB />
    </>
  );
};

export default LayoutWithGNB;
