import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Login from '../pages/Login/Login';
import KakaoCallback from '../pages/KakaoCallback/KakaoCallback';
import Home from '../pages/Home/Home';
import LayoutWithGNB from '../layouts/LayoutWithGNB';
import Feed from '../pages/Feed/Feed';
import Moment from '../pages/Moment/Moment';
import MomentComplete from '../pages/Moment/MomentComplete';
import MyPage from '../pages/MyPage/MyPage';
import SelectMode from '../pages/Moment/SelectMode';

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
            path: 'moment/select-mode',
            element: <SelectMode />,
          },
          {
            path: '/moment',
            element: <Moment />,
          },
          {
            path: './moment-complete',
            element: <MomentComplete />,
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
