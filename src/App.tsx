import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router/Router';
import queryClient from './apis/queryClient';
import { UserInfoProvider } from './store/User/UserContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserInfoProvider>
    </QueryClientProvider>
  );
}

export default App;
