/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import type { RouteProps } from 'react-router-dom';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams): JSX.Element {
  const { keycloak } = useKeycloak();

  return (
    <Route
      {...rest}
      render={(props) => {
        return keycloak?.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}
