import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import MainContainer from "../components/layouts/MainContainer";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import I18nWrapper from "../hooks/I18nWrapper";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <I18nWrapper>
      <ChakraProvider theme={theme}>
        <MainContainer>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <NavBar />
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </MainContainer>
      </ChakraProvider>
    </I18nWrapper>
  );
}

export default App;
