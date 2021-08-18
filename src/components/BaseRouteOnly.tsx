import React from 'react';
import {
  Redirect,
  Route,
  Switch as RouterSwitch,
  useLocation,
} from 'react-router-dom';
import { PageNotFound } from 'src/views/PageNotFound';

interface BaseRouteOnlyProps {
  children: React.ReactNode;
  baseRoute: string;
}
export function BaseRouteOnly({
  children,
  baseRoute,
}: BaseRouteOnlyProps): JSX.Element {
  const { pathname } = useLocation();
  return (
    <RouterSwitch>
      <Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
      <Route path={baseRoute} exact>
        {children}
      </Route>
      <Route component={PageNotFound} />
    </RouterSwitch>
  );
}
