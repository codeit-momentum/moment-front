import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Home from '../pages/Home/Home';

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
        path: 'home',
        element: <Home />,
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
