import { useInterpret } from '@xstate/react';
import React, { createContext, ReactNode } from 'react';
import {
  accountingEntryFrequencyDataMachine,
  AccountingEntryFrequencyService,
} from 'src/machines/acc-entry-freq-data-machine';
import {
  rentalBoothFrequencyDataMachine,
  RentalBoothFrequencyService,
} from 'src/machines/rental-booth-freq-data-machine';

interface ChartDataContextType {
  accountEntryFrequencyService: AccountingEntryFrequencyService;
  rentalBoothFreqencyService: RentalBoothFrequencyService;
}

const ChartDataContext = createContext({} as ChartDataContextType);

export function useChartDataContext(): ChartDataContextType {
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
  const accountEntryFrequencyService = useInterpret(
    accountingEntryFrequencyDataMachine,
  );
  const rentalBoothFreqencyService = useInterpret(
    rentalBoothFrequencyDataMachine,
  );

  return (
    <ChartDataContext.Provider
      value={{ accountEntryFrequencyService, rentalBoothFreqencyService }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};
