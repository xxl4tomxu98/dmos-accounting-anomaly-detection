import { Box } from '@chakra-ui/react';
import { VictoryPie } from 'victory';

export default function InsightsPieChart(): JSX.Element {
  return (
    <Box w='full'>
      <VictoryPie />
    </Box>
  );
}
