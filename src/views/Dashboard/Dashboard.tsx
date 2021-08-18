import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BaseRouteOnly } from 'src/components/BaseRouteOnly';
import { ChartDataProvider } from 'src/context/ChartDataProvider';
import { Analysis } from './Analysis';
import { Insights } from './Insights';

function DashboardTabs(): JSX.Element {
  return (
    <Box flex='1' w='full'>
      <Tabs h='full' colorScheme='purple' isLazy>
        <TabList>
          <Tab>Insights</Tab>
          <Tab>AI Analysis</Tab>
        </TabList>
        <TabPanels pb='10' h='full'>
          <TabPanel h='full' p='0' pt='6'>
            <Insights />
          </TabPanel>
          <TabPanel h='full' p='0' pt='6'>
            <Analysis />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export function Dashboard(): JSX.Element {
  return (
    <BaseRouteOnly baseRoute='/app/dashboard'>
      <ChartDataProvider>
        <Box h='full'>
          <VStack h='full' alignItems='start' spacing='6'>
            <VStack alignItems='start' as='header' spacing='2'>
              <Heading data-testid='page-heading' as='h1' size='2xl'>
                Dashboard
              </Heading>
              <Text as='p' size='md' color='gray.500'>
                Learn from your financial data
              </Text>
            </VStack>
            <DashboardTabs />
          </VStack>
        </Box>
      </ChartDataProvider>
    </BaseRouteOnly>
  );
}
