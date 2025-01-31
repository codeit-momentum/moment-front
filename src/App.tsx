import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router/Router';
import queryClient from './apis/queryClient';
import { Suspense } from 'react';
import Fallback from './pages/Fallback/Fallback';
import { UserInfoProvider } from './store/User/UserContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Fallback />}>
        <UserInfoProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </UserInfoProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
