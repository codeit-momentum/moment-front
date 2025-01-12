import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Login from '../pages/Login/Login';
import KakaoCallback from '../pages/KakaoCallback/KakaoCallback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '',
  //         element: <Main />,
  //       },
  //       {
  //         path: 'products',
  //         children: [
  //           {
  //             path: '',
  //             element: <ProductList />,
  //           },
  //           {
  //             path: ':productId',
  //             element: <ProductDetail />,
  //           },
  //         ],
  //       },
  //       {
  //         path: '*',
  //         element: <NotFound />,
  //       },
  //     ],
  //   },
]);

export default router;
