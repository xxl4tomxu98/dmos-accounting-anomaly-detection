import { ChakraProvider, theme } from '@chakra-ui/react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorAlert } from './components/ErrorAlert';
import { AppRoutes } from './views/AppRoutes/AppRoutes';

interface AppProps {
  history: History;
}
export function App({ history }: AppProps): JSX.Element | null {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorAlert}>
        <ConnectedRouter history={history}>
          <AppRoutes />
        </ConnectedRouter>
      </ErrorBoundary>
    </ChakraProvider>
  );
}
