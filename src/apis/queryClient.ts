import { QueryClient, keepPreviousData } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  },
});

export default queryClient;
