import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Login from '../pages/Login/Login';
import KakaoCallback from '../pages/KakaoCallback/KakaoCallback';
import Home from '../pages/Home/Home';
import LayoutWithGNB from '../layouts/LayoutWithGNB';
import Feed from '../pages/Feed/Feed';
import CreateMoment from '../pages/Moment/CreateMoment';
import MomentComplete from '../pages/Moment/MomentComplete';
import MyPage from '../pages/MyPage/MyPage';
import BucketList from '../pages/Moment/BucketList/BucketList';
import Upload from '../pages/Moment/Upload/Upload';
import SelectMode from '../pages/Moment/SelectMode';
import Moment from '../pages/Moment/Moment';
import Friend from '../pages/MyPage/Friend/Friend';
import EditProfile from '../pages/MyPage/EditProfile/EditProfile';
import NotFound from '../pages/NotFound/NotFound';

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
                path: 'upload/:id',
                element: <Upload variant="moment" />,
              },
              {
                path: 'bucket',
                element: <BucketList />,
              },
              {
                path: 'bucket/upload/:id',
                element: <Upload variant="bucket" />,
              },
              {
                path: 'select-mode/:id',
                element: <SelectMode />,
              },
              {
                path: 'create-moment/:id',
                element: <CreateMoment />,
              },
              {
                path: 'complete',
                element: <MomentComplete />,
              },
            ],
          },
          {
            path: '/mypage',
            children: [
              {
                path: '',
                element: <MyPage />,
              },
              {
                path: 'friend',
                element: <Friend />,
              },
              {
                path: 'edit',
                element: <EditProfile />,
              },
            ],
          },
        ],
      },
      {
        path: '/',
        element: <Start />, //Start
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'auth/kakao/callback',
        element: <KakaoCallback />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
