import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { INSIGHTS_BUTTON_LIST_ITEM_DATA } from '../../features/dashboard/constants/button-list-data';
import { INSIGHTS_COMPONENT_DATA_MAP } from '../../features/dashboard/constants/component-data-maps';
import { InsightsContentTypes } from '../../features/dashboard/enums/content-types';
import { InsightsButtonList } from '../../features/dashboard/insights/components/InsightsButtonList';

export function Insights(): JSX.Element {
  const [currentContentType, set] = React.useState<InsightsContentTypes>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    INSIGHTS_BUTTON_LIST_ITEM_DATA[0]!.content,
  );
  const setContentType = (chart: InsightsContentTypes) => {
    set(chart);
  };

  const contentContainer = React.useMemo(() => {
    return INSIGHTS_COMPONENT_DATA_MAP[currentContentType];
  }, [currentContentType]);

  return (
    <Box h='full'>
      <Grid
        h='full'
        columnGap='6'
        gridTemplateColumns='minmax(20rem, auto) 1fr'
      >
        <GridItem>
          <InsightsButtonList setContentTypeFn={setContentType} />
        </GridItem>
        <GridItem>
          <Box w='full' h='full' borderX='2px' borderColor='gray.200'>
            {contentContainer}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
