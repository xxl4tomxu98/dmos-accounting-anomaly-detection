import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { SubPageLayout } from 'src/components/SubPageLayout';
import { ContentTitles } from '../../constants/content-titles';

const LazyAccountingEntryFrequencyBarChart = React.lazy(
  () => import('./AccountingEntryFrequencyBarChart'),
);
const LazyRentalBoothFrequencyBarChart = React.lazy(
  () => import('./RentalBoothFrequencyBarChart'),
);

export function RentalBoothAndAccountingEntriesTable(): JSX.Element {
  return (
    <HStack spacing='16' mb='25' align='top'>
      <Box>
        <SubPageLayout.Header
          title={`${ContentTitles.RENTAL_BOOTH_TABLE}`}
          subTitle=''
        />
        <Table variant='simple' id='rental_booth_table'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Summary</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>1,618,208</Td>
              <Td>Total Records</Td>
            </Tr>
            <Tr>
              <Td isNumeric>21</Td>
              <Td>Unique Packages</Td>
            </Tr>
            <Tr>
              <Td isNumeric>1,618,208</Td>
              <Td>Unique Orders</Td>
            </Tr>
            <Tr>
              <Td isNumeric>1,461,412</Td>
              <Td>Unique Groups</Td>
            </Tr>
            <Tr>
              <Td isNumeric>181</Td>
              <Td>Unique Dates</Td>
            </Tr>
            <Tr>
              <Td isNumeric>01/16/2020</Td>
              <Td>Min Date</Td>
            </Tr>
            <Tr>
              <Td isNumeric>06/07/2021</Td>
              <Td>Max Date</Td>
            </Tr>
            <Tr>
              <Td isNumeric>$826,595,920.00</Td>
              <Td>Total Fees</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box>
        <SubPageLayout.Header
          title={`${ContentTitles.ACCOUNT_ENTRY_TABLE}`}
          subTitle=''
        />
        <Table variant='simple' id='account_entry_table'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Summary</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>2,144,200</Td>
              <Td>Total Records</Td>
            </Tr>
            <Tr color='white'>
              <Td> PLACEHOLDER </Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td isNumeric>1,598,938</Td>
              <Td>Unique Orders</Td>
            </Tr>
            <Tr>
              <Td isNumeric>1,456,944</Td>
              <Td>Unique Groups</Td>
            </Tr>
            <Tr>
              <Td isNumeric>146</Td>
              <Td>Unique Dates</Td>
            </Tr>
            <Tr>
              <Td isNumeric>09/10/2020</Td>
              <Td>Min Date</Td>
            </Tr>
            <Tr>
              <Td isNumeric>06/04/2021</Td>
              <Td>Max Date</Td>
            </Tr>
            <Tr>
              <Td isNumeric>$971,483,394.04</Td>
              <Td>Total Amount</Td>
            </Tr>
            <Tr>
              <Td isNumeric>1,778,904.04</Td>
              <Td>Total Failed Entries</Td>
            </Tr>
            <Tr>
              <Td isNumeric>$969,704,490.00</Td>
              <Td>Total Amount Collected</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </HStack>
  );
}

export function AccountEntriesChartContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.Graphic
        graphic={<LazyAccountingEntryFrequencyBarChart />}
      />
      <SubPageLayout.Header
        title={`${ContentTitles.ACCOUNT_ENTRY_FREQUENCY}`}
        subTitle=''
      />
      <SubPageLayout.Body>
        <Text></Text>
      </SubPageLayout.Body>
    </SubPageLayout>
  );
}

export function StaticAnalysisContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.MGraphic
        isLazy={false}
        graphic={<RentalBoothAndAccountingEntriesTable />}
      />

      <SubPageLayout.Header
        title={`${ContentTitles.RENTAL_BOOTH_AND_ACCOUNTING}`}
        subTitle=''
      />
      <SubPageLayout.Body>
        <Text></Text>
      </SubPageLayout.Body>
    </SubPageLayout>
  );
}

export function RentalDataChartContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.Graphic graphic={<LazyRentalBoothFrequencyBarChart />} />
      <SubPageLayout.Header
        title={`${ContentTitles.RENTAL_BOOTH_FREQUENCY}`}
        subTitle=''
      />
      <SubPageLayout.Body>
        <Text></Text>
      </SubPageLayout.Body>
    </SubPageLayout>
  );
}
