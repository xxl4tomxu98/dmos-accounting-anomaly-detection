import { Button, Flex, HStack, Link, LinkBox, Text } from '@chakra-ui/react';
import { useKeycloak } from '@react-keycloak/web';
import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { clearUserData } from 'src/store/user/user.actions';
import { Logo } from '../Logo';

export function Navigation(): JSX.Element {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  const logout = React.useCallback(() => {
    dispatch(clearUserData());
    dispatch(push('/login'));
    keycloak?.logout();
  }, [keycloak, dispatch]);

  const NavigationActions = React.useMemo(() => {
    const { authenticated } = keycloak;

    return (
      <HStack spacing='3'>
        {authenticated ? (
          <>
            <Link as={RouterLink} to={{ pathname: '../app/dashboard' }}>
              Dashboard
            </Link>
            <Button onClick={logout} variant='solid'>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link as={RouterLink} to='/home'>
              Home
            </Link>
            <Button as={RouterLink} variant='solid' to='/login'>
              Login
            </Button>
          </>
        )}
      </HStack>
    );
  }, [keycloak, logout]);

  return (
    <Flex
      as='nav'
      px='10'
      h='120px'
      alignItems='center'
      justifyContent='space-between'
      borderBottom='1px'
    >
      <LinkBox as={RouterLink} to='/home'>
        <HStack spacing='3'>
          <Logo />
          <Text fontSize='lg' fontWeight='bold'>
            Elite Accounting
          </Text>
        </HStack>
      </LinkBox>
      <HStack spacing='3'>{NavigationActions}</HStack>
    </Flex>
  );
}
