import "../styles/globals.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps}></Component>
      </Hydrate>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  );
}

export default MyApp;
