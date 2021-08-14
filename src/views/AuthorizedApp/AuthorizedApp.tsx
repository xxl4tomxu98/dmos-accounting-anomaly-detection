import { Redirect, Route, Switch as RouterSwitch } from 'react-router-dom';
import { PrimaryLayout } from 'src/components/PrimaryLayout';
import { Faq } from './Faq';
import { Home } from './Home';

export default function AuthorizedApp(): JSX.Element {
  const basePath = '/app';
  return (
    <PrimaryLayout>
      <RouterSwitch>
        <Route path={`${basePath}/home`}>
          <Home />
        </Route>
        <Route path={`${basePath}/faq`}>
          <Faq />
        </Route>
        <Route>
          <Redirect to={`${basePath}/home`} />;
        </Route>
      </RouterSwitch>
    </PrimaryLayout>
  );
}
