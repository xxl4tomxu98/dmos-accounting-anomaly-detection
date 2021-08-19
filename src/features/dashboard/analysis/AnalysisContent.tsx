import {
  Box,
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useMachine } from '@xstate/react';
import React from 'react';
import { SubPageLayout } from 'src/components/SubPageLayout';
import { aiScoreMachine } from 'src/machines/ai-score-machine';
import { isNullish } from 'src/types/aliases-and-guards';
import { ContentTitles } from '../constants/content-titles';
import { Score } from './Score';
const scoreExists = (score: number | undefined): score is number => {
  return !isNullish(score);
};
export function AiAnalysisContainer(): JSX.Element {
  const [current, send] = useMachine(aiScoreMachine);

  const variant = React.useMemo(() => {
    if (scoreExists(current.context.data?.anomalyCount)) {
      switch (true) {
        case current.context.data.anomalyCount >= 75: {
          return 'positive';
        }
        case current.context.data.anomalyCount <= 25: {
          return 'negative';
        }
        case current.context.data.anomalyCount > 25 &&
          current.context.data?.anomalyCount < 75: {
          return 'medium';
        }
        default:
          return 'neutral';
      }
    } else {
      return 'neutral';
    }
  }, [current]);

  const getScore = React.useCallback(() => {
    send({ type: 'FETCH' });
  }, [send]);

  return (
    <SubPageLayout>
      <SubPageLayout.Header
        title={`${ContentTitles.AI_ANALYSIS}`}
        subTitle='This is a subtitle'
      />
      <VStack w='full' spacing='6'>
        <Box w='full'>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box w='full'>
          <VStack
            p='10'
            borderColor='gray.300'
            borderWidth='thin'
            borderRadius='2xl'
            spacing='6'
          >
            <Score
              score={current.context.data.anomalyCount}
              description={current.context.data.createDate}
              isLoading={current.matches('fetching')}
              variant={variant}
            />
            <Button onClick={getScore} colorScheme='purple'>
              Calculate Score
            </Button>
          </VStack>
        </Box>
      </VStack>
    </SubPageLayout>
  );
}

const LazyAiAnalysisFrequencyBarChart = React.lazy(
  () => import('./AiAnalysisFrequencyBarChart'),
);
export function AiAnalysisFrequencyChartContainer(): JSX.Element {
  return (
    <SubPageLayout>
      <SubPageLayout.Graphic
        isLazy
        graphic={<LazyAiAnalysisFrequencyBarChart />}
      />
      <SubPageLayout.Header
        title={`${ContentTitles.AI_ANALYSIS_FREQUENCY}`}
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
