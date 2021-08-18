import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { useActor } from '@xstate/react/lib/useActor';
import React from 'react';
import { ErrorComponent } from 'src/components/ErrorComponent';
import { useChartContext } from 'src/context/ChartDataProvider';
import { isNullish } from 'src/types/aliases-and-guards';
import { VictoryBar, VictoryChart } from 'victory';
import { barChartDataTransform } from '../utils/bar-chart-data-transform';

export default function InsightsBarChart(): JSX.Element | null {
  const { barChartService } = useChartContext();
  const [state] = useActor(barChartService);

  React.useEffect(() => {
    barChartService.send({ type: 'FETCH' });
  }, [barChartService]);

  const handleRefresh = React.useCallback(() => {
    barChartService.send({ type: 'REFRESH' });
  }, [barChartService]);

  const chartData = React.useMemo(() => {
    if (!isNullish(state.context.data)) {
      return barChartDataTransform(state.context.data) as any[];
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
                labels={({ datum }) => `Total: ${datum.y}`}
                data={chartData}
              />
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
