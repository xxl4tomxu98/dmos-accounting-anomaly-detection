import pick from 'lodash/fp/pick';
import pipe from 'lodash/fp/pipe';
import { UserData } from 'src/store/user/user.reducers';

function mapToUserData(
  obj: Pick<Keycloak.KeycloakInstance, 'token' | 'resourceAccess'>,
): UserData {
  return {
    token: obj.token ?? '',
    roles: obj.resourceAccess?.account?.roles ?? [],
  };
}
export function pluckUserValuesFromKeycloak(
  keycloak: Keycloak.KeycloakInstance,
): UserData {
  return pipe(pick(['token', 'resourceAccess']), mapToUserData)(keycloak);
}
