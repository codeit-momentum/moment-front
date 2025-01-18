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
        path: '/',
        element: <SelectMode />,
      },
      {
        path: 'start', // 이전 기본 페이지를 별도 경로로 이동
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
        path: 'moment/select-mode',
        element: <SelectMode />,
      },
      {
        path: '/moment',
        element: <Moment />,
      },
      {
        path: '/moment-complete',
        element: <MomentComplete />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
