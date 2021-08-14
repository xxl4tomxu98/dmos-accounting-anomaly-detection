import { ColorModeScript } from '@chakra-ui/react';
import { AuthClientTokens } from '@react-keycloak/core';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { pluckUserValuesFromKeycloak } from 'src/features/user/utils/keycloak-user-utils';
import { App } from './App';
import './index.css';
import keycloak from './keycloak';
import reportWebVitals from './reportWebVitals';
import { history, store } from './store/store';
import { setUserData } from './store/user/user.actions';

// TODO: Hunter - purify this a little more
let currentToken: string | undefined;
const handleTokenUpdate = (newToken: AuthClientTokens): void => {
  if (currentToken !== newToken.token) {
    currentToken = newToken.token;
    // Only need to dispatch a new action with the token changes
    store.dispatch(setUserData(pluckUserValuesFromKeycloak(keycloak)));
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak} onTokens={handleTokenUpdate}>
      <ReduxProvider store={store}>
        <ColorModeScript />
        <App history={history} />
      </ReduxProvider>
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
