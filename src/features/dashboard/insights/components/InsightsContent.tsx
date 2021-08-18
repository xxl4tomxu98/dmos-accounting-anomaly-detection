import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { SubPageLayout } from 'src/components/SubPageLayout';
import { ContentTitles } from '../../constants/content-titles';

const LazyAccountingEntryFrequencyBarChart = React.lazy(
  () => import('./AccountingEntryFrequencyBarChart'),
);
const LazyRentalBoothFrequencyBarChart = React.lazy(
  () => import('./RentalBoothFrequencyBarChart'),
);

export function AccountEntriesChartContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.Graphic
        graphic={<LazyAccountingEntryFrequencyBarChart />}
      />
      <SubPageLayout.Header
        title={`${ContentTitles.ACCOUNT_ENTRY_FREQUENCY}`}
        subTitle='This is a subtitle'
      />
      <SubPageLayout.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </SubPageLayout.Body>
    </SubPageLayout>
  );
}

export function StaticAnalysisContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.Graphic isLazy={false} graphic={<Box>GRAPHIC HERE</Box>} />
      <SubPageLayout.Header
        title={`${ContentTitles.RENTAL_BOOTH_AND_ACCOUNTING}`}
        subTitle='This is a subtitle'
      />
      <SubPageLayout.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
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
        subTitle='This is a subtitle'
      />
      <SubPageLayout.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </SubPageLayout.Body>
    </SubPageLayout>
  );
}
