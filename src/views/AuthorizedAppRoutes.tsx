import { Redirect, Route, Switch as RouterSwitch } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';

export default function AuthorizedApp(): JSX.Element {
  const basePath = '/app';
  return (
    <RouterSwitch>
      {/* TODO: Hunter - create routes enum */}
      <Route path={`${basePath}/dashboard`}>
        <Dashboard />
      </Route>
      <Route>
        <Redirect to={`${basePath}/dashboard`} />;
      </Route>
    </RouterSwitch>
  );
}
