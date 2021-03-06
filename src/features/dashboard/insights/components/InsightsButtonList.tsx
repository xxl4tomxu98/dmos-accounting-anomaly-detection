import { Box, Button, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { INSIGHTS_BUTTON_LIST_ITEM_DATA } from '../../constants/button-list-data';
import { InsightsContentTypes } from '../../enums/content-types';

interface ButtonListState {
  currentIndex: number;
}

const initialButtonListState: ButtonListState = {
  currentIndex: 0,
};

interface InsightsButtonListProps {
  setContentTypeFn: (content: InsightsContentTypes) => void;
}
export function InsightsButtonList({
  setContentTypeFn,
}: InsightsButtonListProps): JSX.Element {
  const [buttonListState, set] = React.useState<ButtonListState>(
    initialButtonListState,
  );

  const handleButtonClick = (idx: number, content: InsightsContentTypes) => {
    set({ currentIndex: idx });
    setContentTypeFn(content);
  };
  return (
    <List>
      {INSIGHTS_BUTTON_LIST_ITEM_DATA.map((item, idx) => (
        <ListItem key={item.content}>
          <Button
            w='full'
            h='full'
            whiteSpace='normal'
            py='2'
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
