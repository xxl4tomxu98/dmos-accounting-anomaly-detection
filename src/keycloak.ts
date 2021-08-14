import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  url: 'https://auth.ftc-llc.net/auth/',
  realm: 'devsecops',
  clientId: 'clientui-test',
});

export default keycloak;
