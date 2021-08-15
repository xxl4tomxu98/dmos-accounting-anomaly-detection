import { pluckUserValuesFromKeycloak } from './keycloak-user-utils';

describe('Testing utility functions', () => {
  it('Keycloak values are parsed properly', () => {
    const dummyData = {
      token: 'testing-123',
      resourceAccess: {
        account: {
          roles: ['role-1', 'role-2'],
        },
      },
    } as unknown as Keycloak.KeycloakInstance;
    const expectedOutput = {
      token: 'testing-123',
      roles: ['role-1', 'role-2'],
    };
    const data = pluckUserValuesFromKeycloak(dummyData);

    expect(data).toStrictEqual(expectedOutput);
  });
});
