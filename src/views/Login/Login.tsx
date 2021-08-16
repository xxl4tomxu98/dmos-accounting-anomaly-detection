import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Redirect, useLocation } from 'react-router-dom';

export function Login(): JSX.Element | null {
  const location = useLocation<{ [key: string]: unknown }>();
  const currentLocationState = location.state || {
    from: { pathname: '/app' },
  };

  const { keycloak } = useKeycloak();

  /* istanbul ignore next */
  const login = React.useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  /* istanbul ignore if */
  if (keycloak?.authenticated) {
    return <Redirect to={currentLocationState?.from as string} />;
  }

  return (
    <VStack spacing='6'>
      <Heading lineHeight='normal' as='h1' size='2xl' textAlign='center'>
        Login To View <br /> Your Dashboard
      </Heading>
      <VStack>
        <Button
          onClick={login}
          size='lg'
          colorScheme='purple'
          rightIcon={<FaArrowRight />}
        >
          Access Your Insights
        </Button>
        <Text color='gray.500'>You'll be redirected shortly</Text>
      </VStack>
    </VStack>
  );
}
