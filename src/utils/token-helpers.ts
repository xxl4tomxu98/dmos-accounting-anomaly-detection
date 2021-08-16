import { AuthClientTokens } from '@react-keycloak/core';
import { pluckUserValuesFromKeycloak } from 'src/features/user/utils/keycloak-user-utils';
import keycloak from 'src/keycloak';
import { store } from 'src/store/store';
import { setUserData } from 'src/store/user/user.actions';

const token = (): [
  () => string | undefined,
  (token: string | undefined) => void,
] => {
  let currentToken: string | undefined;
  function assignToken(token: string | undefined): void {
    currentToken = token;
  }
  function getTokenValue(): string | undefined {
    return currentToken;
  }
  return [getTokenValue, assignToken];
};
export const [getTokenValue, assignToken] = token();
export const handleTokenUpdate = (newToken: AuthClientTokens): void => {
  if (getTokenValue() !== newToken.token) {
    assignToken(newToken.token);
    // Only need to dispatch a new action with the token changes
    store.dispatch(setUserData(pluckUserValuesFromKeycloak(keycloak)));
  }
};
