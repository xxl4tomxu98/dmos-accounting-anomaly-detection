import { ReactKeycloakProvider } from '@react-keycloak/web';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import keycloak from 'src/keycloak';
import { AppRoutes } from './AppRoutes';

const handleTokenUpdate = jest.fn();

function setup(): void {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ReactKeycloakProvider authClient={keycloak} onTokens={handleTokenUpdate}>
        <AppRoutes />
      </ReactKeycloakProvider>
    </Router>,
  );
}

describe('AppRoutes component', () => {
  it('Renders correct default route if unauthorized', async () => {
    setup();
  });
});

export {};
