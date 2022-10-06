import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from './../styles/theme';

import { QueryClientProvider } from 'react-query';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { makeServer } from '../service/mirage';
import { queryClient } from '../service/queryClient';

//Se estiver no ambiente de desenvolvimento, inicia o Mirage
if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Não importa a orden dos provides quando tenho mais de um provider.
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
