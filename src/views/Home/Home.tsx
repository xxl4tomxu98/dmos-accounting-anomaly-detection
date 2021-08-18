import { Box, Heading, Text } from '@chakra-ui/react';

export function Home(): JSX.Element {
  return (
    <Box>
      <Heading as='h1' textAlign='center' lineHeight='normal' size='3xl'>
        Simple Insights
        <br />
        <Text as='span' color='purple.500'>
          Bold Predictions
        </Text>
      </Heading>
    </Box>
  );
}
