import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from './../pages/Start/Start';
import Home from '../pages/Home/Home';
import LayoutWithGNB from '../layouts/LayoutWithGNB';

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
    ],
  },
]);

export default router;
