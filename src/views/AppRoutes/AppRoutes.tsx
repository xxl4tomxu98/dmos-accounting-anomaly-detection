import { useKeycloak } from '@react-keycloak/web';
import {
  Redirect,
  Route,
  Switch as RouterSwitch,
  useLocation,
} from 'react-router-dom';
import { PageSpinner } from 'src/components/PageSpinner';
import { PrimaryLayout } from 'src/components/PrimaryLayout';
import { PrivateRoute } from 'src/components/PrivateRoute';
import AuthorizedApp from '../AuthorizedAppRoutes';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { PageNotFound } from '../PageNotFound';

export function AppRoutes(): JSX.Element | null {
  const { initialized, keycloak } = useKeycloak();
  const { pathname } = useLocation();

  if (!initialized) {
    return <PageSpinner />;
  }
  return (
    <PrimaryLayout>
      <RouterSwitch>
        {keycloak.authenticated ? (
          <Redirect exact from='/' to='/app' />
        ) : (
          <Redirect exact from='/' to='/home' />
        )}
        <PrivateRoute path='/app' component={AuthorizedApp} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
        <Route component={PageNotFound} />
      </RouterSwitch>
    </PrimaryLayout>
  );
}
