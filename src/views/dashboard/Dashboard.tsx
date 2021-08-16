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
import { Analysis } from './Analysis';
import { Insights } from './Insights/Insights';

function DashboardTabs(): JSX.Element {
  return (
    <Box w='full'>
      <Tabs colorScheme='purple' isLazy>
        <TabList>
          <Tab>Insights</Tab>
          <Tab>AI Analysis</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p='0' pt='6'>
            <Insights />
          </TabPanel>
          <TabPanel p='0' pt='6'>
            <Analysis />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export function Dashboard(): JSX.Element {
  return (
    <Box>
      <VStack alignItems='start' spacing='6'>
        <VStack alignItems='start' as='header' spacing='2'>
          <Heading data-testid='page-heading' as='h1' size='xl'>
            Dashboard
          </Heading>
          <Text as='p' size='md' color='gray.500'>
            Learn from your financial data
          </Text>
        </VStack>
        <DashboardTabs />
      </VStack>
    </Box>
  );
}
