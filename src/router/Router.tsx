import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Home from '../pages/Home/Home';
import LayoutWithGNB from '../layouts/LayoutWithGNB';
import Feed from '../pages/Feed/Feed';
import Moment from '../pages/Moment/Moment';
import MyPage from '../pages/MyPage/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
    ],
  },
  {
    path: '/',
    element: <LayoutWithGNB />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/feed',
        element: <Feed />,
      },
      {
        path: '/moment',
        element: <Moment />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
