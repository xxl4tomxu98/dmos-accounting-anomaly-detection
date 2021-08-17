import { Box, Flex, HStack, Image, StackDivider, Text } from '@chakra-ui/react';

// eslint-disable-next-line
const appenv = (window as any)._env_;

export function Footer(): JSX.Element {
  return (
    <Box pt='10' w='full' as='footer'>
      <Flex justifyContent='center' w='full' backgroundColor='gray.200'>
        <Flex
          w='full'
          maxW='1440px'
          alignItems='center'
          justifyContent='space-between'
          p='10'
        >
          <Flex>
            <HStack divider={<StackDivider borderColor='black' />} spacing='4'>
              <Image boxSize='35' src='/logo192.png' alt='footer site logo' />
              <Text lineHeight='shorter'>
                Elite Forensic
                <br /> Accounting Agency
              </Text>
            </HStack>
          </Flex>
          <Text alignSelf='flex-end' color='gray.600'>
            v{appenv.DEPLOY_VER ?? 'unknown'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
