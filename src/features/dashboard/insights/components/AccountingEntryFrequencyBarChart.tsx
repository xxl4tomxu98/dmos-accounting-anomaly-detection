import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { useActor } from '@xstate/react/lib/useActor';
import React from 'react';
import { ErrorComponent } from 'src/components/ErrorComponent';
import { useChartDataContext } from 'src/context/ChartDataProvider';
import { isNullish } from 'src/types/aliases-and-guards';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import { barChartDataTransform } from '../utils/bar-chart-data-transform';

export default function AccountingEntryFrequencyBarChart(): JSX.Element | null {
  const { accountEntryFrequencyService } = useChartDataContext();
  const [state] = useActor(accountEntryFrequencyService);

  React.useEffect(() => {
    accountEntryFrequencyService.send({ type: 'FETCH' });
  }, [accountEntryFrequencyService]);

  const handleRefresh = React.useCallback(() => {
    accountEntryFrequencyService.send({ type: 'REFRESH' });
  }, [accountEntryFrequencyService]);

  const chartData = React.useMemo(() => {
    if (!isNullish(state.context.data)) {
      // TODO: Might need different data transformation
      return barChartDataTransform(state.context.data);
    }
    return [];
  }, [state]);

  const ChartUi = React.useMemo(() => {
    switch (true) {
      case state.matches('idle.noError.hasData'): {
        return (
          <Box w='full'>
            <VictoryChart>
              <VictoryBar
                labels={({ datum }) => `${datum.y}`}
                barWidth={10}
                colorScale='warm'
                padding={{ left: 25, right: 25 }}
                style={{ labels: { fontSize: 12 }, data: { fontSize: 12 } }}
                data={chartData}
              />
              <VictoryAxis tickLabelComponent={<VictoryLabel angle={90} />} />
            </VictoryChart>
          </Box>
        );
      }
      case state.matches('idle.noError.noData'): {
        return (
          <Box w='full'>
            <Text>No data available to display</Text>
          </Box>
        );
      }
      case state.matches('fetching'): {
        return (
          <Center>
            <Spinner />
          </Center>
        );
      }
      case state.matches('idle.errored'): {
        return (
          <ErrorComponent
            message={state.context.errorMessage}
            refreshCb={handleRefresh}
          />
        );
      }
      default:
        return null;
    }
  }, [state, handleRefresh, chartData]);

  return ChartUi;
}
