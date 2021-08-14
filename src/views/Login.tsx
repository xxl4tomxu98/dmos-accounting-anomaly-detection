import { Button, Link } from '@chakra-ui/react';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Link as RouterLink, Redirect, useLocation } from 'react-router-dom';
import { clearUserData } from 'src/store/user/user.actions';
import { useAppDispatch } from 'src/utils/redux-hooks';

export function Login(): JSX.Element | null {
  const location = useLocation<{ [key: string]: unknown }>();
  const currentLocationState = location.state || {
    from: { pathname: '/app' },
  };

  const { keycloak } = useKeycloak();
  const dispatch = useAppDispatch();

  const login = React.useCallback(() => {
    keycloak?.login();
  }, [keycloak]);
  const logout = React.useCallback(() => {
    keycloak?.logout();
    dispatch(clearUserData());
  }, [keycloak, dispatch]);

  if (keycloak?.authenticated) {
    return <Redirect to={currentLocationState?.from as string} />;
  }

  return (
    <div>
      <Button onClick={login}>Login</Button>
      <Button onClick={logout}>Logout</Button>
      <Link as={RouterLink} to='/playground'>
        To Playground
      </Link>
    </div>
  );
}
