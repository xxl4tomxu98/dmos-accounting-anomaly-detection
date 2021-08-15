import { Box, Button, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { BUTTON_LIST_ITEM_DATA } from './constants/button-list-data';
import { ChartTypes } from './enums/chart-types';

interface ButtonListState {
  currentIndex: number;
}

const initialButtonListState: ButtonListState = {
  currentIndex: 0,
};

interface InsightsButtonListProps {
  setChartTypeFn: (chart: ChartTypes) => void;
}
export function InsightsButtonList({
  setChartTypeFn,
}: InsightsButtonListProps): JSX.Element {
  const [buttonListState, set] = React.useState<ButtonListState>(
    initialButtonListState,
  );

  const handleButtonClick = (idx: number, chart: ChartTypes) => {
    set({ currentIndex: idx });
    setChartTypeFn(chart);
  };
  return (
    <List>
      {BUTTON_LIST_ITEM_DATA.map((item, idx) => (
        <ListItem key={item.chart}>
          <Button
            w='full'
            textAlign='left'
            onClick={() => handleButtonClick(idx, item.chart)}
            variant='unstyled'
            backgroundColor={
              buttonListState.currentIndex === idx ? 'purple.50' : ''
            }
            borderWidth='1px'
            borderColor={
              buttonListState.currentIndex === idx
                ? 'purple.400'
                : 'transparent'
            }
          >
            <Box px='6'>{item.label}</Box>
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
