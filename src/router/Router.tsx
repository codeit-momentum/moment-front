import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Login from '../pages/Login/Login';
import KakaoCallback from '../pages/KakaoCallback/KakaoCallback';
import Home from '../pages/Home/Home';
import LayoutWithGNB from '../layouts/LayoutWithGNB';
import Feed from '../pages/Feed/Feed';
import Moment from '../pages/Moment/Moment';
import MyPage from '../pages/MyPage/MyPage';
import BucketList from '../pages/BucketList/BucketList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
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
            children: [
              {
                path: '',
                element: <Moment />,
              },
              {
                path: 'bucket',
                element: <BucketList />,
              },
            ],
          },
          {
            path: '/mypage',
            element: <MyPage />,
          },
        ],
      },
      {
        path: '/',
        element: <Start />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'auth/kakao/callback',
        element: <KakaoCallback />,
      },
    ],
  },
]);

export default router;
