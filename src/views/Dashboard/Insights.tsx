import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { BUTTON_LIST_ITEM_DATA } from '../../features/dashboard/constants/button-list-data';
import { CHART_COMPONENT_DATA_MAP } from '../../features/dashboard/constants/chart-component-data-map';
import { ChartTypes } from '../../features/dashboard/enums/chart-types';
import { InsightsButtonList } from '../../features/dashboard/insights/components/InsightsButtonList';

export function Insights(): JSX.Element {
  const [currentChartType, set] = React.useState<ChartTypes>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    BUTTON_LIST_ITEM_DATA[0]!.chart,
  );
  const setChartType = (chart: ChartTypes) => {
    set(chart);
  };

  const chartContainer = React.useMemo(() => {
    return CHART_COMPONENT_DATA_MAP[currentChartType];
  }, [currentChartType]);

  return (
    <Box>
      <Grid columnGap='6' gridTemplateColumns='20rem 1fr'>
        <GridItem>
          <InsightsButtonList setChartTypeFn={setChartType} />
        </GridItem>
        <GridItem>
          <Box w='full' borderX='2px' borderColor='gray.200'>
            {chartContainer}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
