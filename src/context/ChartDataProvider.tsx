import { useInterpret } from '@xstate/react';
import React, { createContext, ReactNode } from 'react';
import {
  barChartDataMachine,
  BarChartService,
} from 'src/machines/bar-chart-data-machine';

interface ChartContextType {
  barChartService: BarChartService;
}

const ChartDataContext = createContext({} as ChartContextType);

export function useChartContext(): ChartContextType {
  const context = React.useContext(ChartDataContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ChartDataProviderProps {
  children: ReactNode;
}
export const ChartDataProvider = ({
  children,
}: ChartDataProviderProps): JSX.Element => {
  const barChartService = useInterpret(barChartDataMachine);

  return (
    <ChartDataContext.Provider value={{ barChartService }}>
      {children}
    </ChartDataContext.Provider>
  );
};
