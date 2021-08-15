import { ChakraProvider, theme } from '@chakra-ui/react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { render, RenderOptions } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import keycloak from './keycloak';
import { history, store } from './store/store';

const handleTokenUpdate = jest.fn();
const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ReactKeycloakProvider authClient={keycloak} onTokens={handleTokenUpdate}>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ConnectedRouter>
    </ReduxProvider>
  </ReactKeycloakProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
