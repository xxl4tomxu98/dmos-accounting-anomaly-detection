import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { BaseRouteOnly } from 'src/components/BaseRouteOnly';
export function Home(): JSX.Element {
  return (
    <BaseRouteOnly baseRoute='/home'>
      <Box w='50%' m='auto'>
        <Heading as='h3' textAlign='center' lineHeight='normal' size='2xl'>
          <Image
            d='inline'
            boxSize='100'
            src='/home/home-1.jpg'
            alt='home 1 logo'
          />
          Elite Forensic Accounting Agency
        </Heading>

        <Text d='block' as='i' mt='3' textAlign='center'>
          "Working to solve the root cause"
        </Text>

        <Text mt='10' mb='5' fontSize='20'>
          Providing:
        </Text>

        <Text mb='5' fontSize='20'>
          Accounting analysis to look beyond the numbers and deal with the
          business reality of a situation.
        </Text>

        <Text mb='5' fontSize='20'>
          We collect, analyze, and evaluate evidential matters, interpret and
          communicate findings to our clients
        </Text>

        <Text fontSize='20'> Our Solutions Provide our Clients with:</Text>

        <Text fontSize='16'>
          <Image
            d='inline'
            mr='2'
            boxSize='75'
            src='/home/home-2.png'
            alt='home 2 logo'
          />
          <Text as='b'>Productivity and Business Value: </Text>
          High quality, secure and working solutions
        </Text>

        <Text fontSize='16'>
          <Image
            d='inline'
            mr='2'
            boxSize='75'
            src='/home/home-3.png'
            alt='home 3 logo'
          />
          <Text as='b'>Collaboration: </Text> Willing and able to coordinate on
          every aspect of your needs
        </Text>

        <Text fontSize='16'>
          <Image
            d='inline'
            mr='2'
            boxSize='75'
            src='/home/home-4.png'
            alt='home 4 logo'
          />
          <Text as='b'>Process Discipline: </Text> Processes and practices
          provide consistent and efficient results
        </Text>

        <Text fontSize='16'>
          <Image
            d='inline'
            mr='2'
            boxSize='75'
            src='/home/home-5.png'
            alt='home 5 logo'
          />
          <Text as='b'>Innovation: </Text>Innovative approach and creative
          solutions result in high quality, secure and working solutions
        </Text>

        <Text fontSize='16'>
          <Image
            d='inline'
            mr='2'
            boxSize='75'
            src='/home/home-6.png'
            alt='home 6 logo'
          />
          <Text as='b'>AI\ML: </Text>Technology to rapidly solve large data
          problems and create business efficiency
        </Text>
      </Box>
    </BaseRouteOnly>
  );
}
