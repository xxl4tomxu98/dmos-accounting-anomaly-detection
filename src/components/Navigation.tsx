import { Box, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function Navigation(): JSX.Element {
  return (
    <Box>
      <HStack>
        <Link as={RouterLink} to={{ pathname: 'home' }}>
          Home
        </Link>
        <Link as={RouterLink} to={{ pathname: 'faq' }}>
          Faq
        </Link>
      </HStack>
    </Box>
  );
}
