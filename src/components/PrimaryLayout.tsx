import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation/Navigation';

interface PrimaryLayoutProps {
  children: ReactNode;
}
export function PrimaryLayout({ children }: PrimaryLayoutProps): JSX.Element {
  return (
    <Flex w='100%' justifyContent='center'>
      <Flex justifyContent='center' w='100%' maxW='1440px'>
        <Flex minH='100vh' w='100%' flexDirection='column'>
          <Navigation />
          <Box px='10' pt='10' flex={1} as='main'>
            {children}
          </Box>
          <Footer />
        </Flex>
      </Flex>
    </Flex>
  );
}
