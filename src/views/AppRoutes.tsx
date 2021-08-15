import { useKeycloak } from '@react-keycloak/web';
import { Redirect, Route, Switch as RouterSwitch } from 'react-router-dom';
import { PageSpinner } from 'src/components/PageSpinner';
import { PrimaryLayout } from 'src/components/PrimaryLayout';
import { PrivateRoute } from 'src/components/PrivateRoute';
import AuthorizedApp from './AuthorizedAppRoutes';
import { Home } from './Home';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';

export function AppRoutes(): JSX.Element | null {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <PageSpinner />;
  }
  return (
    <PrimaryLayout>
      <RouterSwitch>
        <Redirect exact from='/' to='/app' />
        <PrivateRoute path='/app' component={AuthorizedApp} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route component={PageNotFound} />
      </RouterSwitch>
    </PrimaryLayout>
  );
}
