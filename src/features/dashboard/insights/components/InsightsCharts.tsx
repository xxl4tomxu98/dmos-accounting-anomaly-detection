import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { Suspense } from 'react';
interface InsightsChartContainerProps {
  viz: React.ReactElement;
  title: string;
  subTitle: string;
  body: string;
}
function InsightsChartContainer({
  viz,
  title,
  subTitle,
  body,
}: InsightsChartContainerProps): JSX.Element {
  return (
    <Box>
      <Box>
        <AspectRatio maxH='sm'>
          <Suspense
            fallback={
              <Center>
                <Spinner />
              </Center>
            }
          >
            {viz}
          </Suspense>
        </AspectRatio>
      </Box>
      <VStack alignItems='left' spacing='6' px='8' py='6' maxW='2xl'>
        <VStack as='header' alignItems='left'>
          <Heading>{title}</Heading>
          <Text as='h3'>{subTitle}</Text>
        </VStack>
        <Divider />
        <Text>{body}</Text>
      </VStack>
    </Box>
  );
}

const LazyBarChart = React.lazy(() => import('./InsightsBarChart'));
const LazyPieChart = React.lazy(() => import('./InsightsPieChart'));

export function InsightsBarChartContainer(): JSX.Element {
  return (
    <InsightsChartContainer
      viz={<LazyBarChart />}
      title='Bar Chart'
      subTitle='This is a subtitle'
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    />
  );
}

export function InsightsPieChartContainer(): JSX.Element {
  return (
    <InsightsChartContainer
      viz={<LazyPieChart />}
      title='Pie Chart'
      subTitle='This is a subtitle'
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    />
  );
}
