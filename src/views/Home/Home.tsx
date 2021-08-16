import { Box, Heading, Text } from '@chakra-ui/react';
import { useKeycloak } from '@react-keycloak/web';
import { Redirect } from 'react-router-dom';

export function Home(): JSX.Element {
  const { keycloak } = useKeycloak();
  return !keycloak.authenticated ? (
    <Box>
      <Heading as='h1' textAlign='center' lineHeight='normal' size='3xl'>
        Simple Insights
        <br />
        <Text as='span' color='purple.500'>
          Bold Predictions
        </Text>
      </Heading>
    </Box>
  ) : (
    <Redirect
      to={{
        pathname: '/app',
      }}
    />
  );
}
