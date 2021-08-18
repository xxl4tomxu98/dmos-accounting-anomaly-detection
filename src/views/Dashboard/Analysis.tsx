import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { AnalysisButtonList } from 'src/features/dashboard/analysis/AnalysisButtonList';
import { ANALYSIS_BUTTON_LIST_ITEM_DATA } from 'src/features/dashboard/constants/button-list-data';
import { ANALYSIS_COMPONENT_DATA_MAP } from 'src/features/dashboard/constants/component-data-maps';
import { AnalysisContentTypes } from 'src/features/dashboard/enums/content-types';

export function Analysis(): JSX.Element {
  const [currentContentType, set] = React.useState<AnalysisContentTypes>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ANALYSIS_BUTTON_LIST_ITEM_DATA[0]!.content,
  );
  const setContentType = (chart: AnalysisContentTypes) => {
    set(chart);
  };

  const contentContainer = React.useMemo(() => {
    return ANALYSIS_COMPONENT_DATA_MAP[currentContentType];
  }, [currentContentType]);

  return (
    <Box h='full'>
      <Grid
        h='full'
        columnGap='6'
        gridTemplateColumns='minmax(20rem, auto) 1fr'
      >
        <GridItem>
          <AnalysisButtonList setContentTypeFn={setContentType} />
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
