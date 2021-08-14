import { ChakraProvider, theme } from '@chakra-ui/react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorAlert } from './components/ErrorAlert';
import { AppRoutes } from './views/AuthorizedApp/AppRoutes';

interface AppProps {
  history: History;
}
export function App({ history }: AppProps): JSX.Element | null {
  // Sending user data to the store when available
  // useSetUserData();

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
