import { Box, Button, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { ANALYSIS_BUTTON_LIST_ITEM_DATA } from '../constants/button-list-data';
import { AnalysisContentTypes } from '../enums/content-types';

interface ButtonListState {
  currentIndex: number;
}

const initialButtonListState: ButtonListState = {
  currentIndex: 0,
};

interface AnalysisButtonListProps {
  setContentTypeFn: (content: AnalysisContentTypes) => void;
}
export function AnalysisButtonList({
  setContentTypeFn,
}: AnalysisButtonListProps): JSX.Element {
  const [buttonListState, set] = React.useState<ButtonListState>(
    initialButtonListState,
  );

  const handleButtonClick = (idx: number, content: AnalysisContentTypes) => {
    set({ currentIndex: idx });
    setContentTypeFn(content);
  };
  return (
    <List>
      {ANALYSIS_BUTTON_LIST_ITEM_DATA.map((item, idx) => (
        <ListItem key={item.content}>
          <Button
            w='full'
            textAlign='left'
            onClick={() => handleButtonClick(idx, item.content)}
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
