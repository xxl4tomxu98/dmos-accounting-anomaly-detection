import { Box } from '@chakra-ui/react';
import { VictoryChart, VictoryLine } from 'victory';

export default function InsightsLineChart(): JSX.Element {
  return (
    <Box w='full'>
      <VictoryChart>
        <VictoryLine
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
        />
      </VictoryChart>
    </Box>
  );
}
