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
      <Flex minH='100vh' flexDirection='column' alignItems='center' w='100%'>
        <Flex
          justifyContent='center'
          flex={1}
          maxW='1440px'
          w='100%'
          flexDirection='column'
        >
          <Navigation />
          <Box px='10' pt='10' flex={1} as='main'>
            {children}
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
