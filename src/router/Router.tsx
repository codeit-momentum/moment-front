import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';

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
