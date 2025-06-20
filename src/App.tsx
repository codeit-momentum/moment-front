import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router/Router';
import queryClient from './apis/queryClient';
import { Suspense } from 'react';
import Fallback from './pages/Fallback/Fallback';
import Style from './styles/index';
import '../src/styles/font.css';

function App() {
  return (
    <Style>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Fallback />}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      </QueryClientProvider>
    </Style>
  );
}

export default App;
