import { ColorModeScript } from '@chakra-ui/react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './App';
import './index.css';
import keycloak from './keycloak';
import reportWebVitals from './reportWebVitals';
import { setupAxios } from './setupAxios';
import { history, store } from './store/store';
import { handleTokenUpdate } from './utils/token-helpers';

setupAxios(axios, store);

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
