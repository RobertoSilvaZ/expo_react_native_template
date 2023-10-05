/* This file allows us to use react-query in our app. */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export { QueryClientProvider, queryClient };
