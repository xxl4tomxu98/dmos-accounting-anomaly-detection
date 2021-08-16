import { Box } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  return (
    <Box as='footer'>
      footer here current app version:{' '}
      {process.env.REACT_APP_VERSION ?? 'unknown'}
    </Box>
  );
}
