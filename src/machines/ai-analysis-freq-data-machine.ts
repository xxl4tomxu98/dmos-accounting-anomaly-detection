import axios from 'axios';
import { catchError, from, mergeMap, of } from 'rxjs';
import { AccountEntriesFrequencyResponse } from 'src/features/dashboard/models/account-entries.models';
import { ActorRefFrom } from 'xstate';
import { dataMachine } from './data-machine';

export interface AiScoreFrequencyMachineContext {
  anomalyCount: number | undefined;
  createDate: string | undefined;
}
// TODO: Change data model and endpoint when ready
export const aiAnalysisFrequencyDataMachine =
  dataMachine<AccountEntriesFrequencyResponse>(
    'ai-analysis-frequency-data',
  ).withConfig({
    services: {
      fetchData: (_context, _event) => {
        return from(
          axios.get<AiScoreFrequencyMachineContext>(
            '/dmos/api/reports/anomalyScoreCountByMonth',
            {
              params: {
                anomalyScore: 1.3511,
              },
            },
          ),
        ).pipe(
          mergeMap((res) => {
            return of({ type: 'RECEIVE_DATA', data: res.data });
          }),
          catchError((err: Error) => {
            return of({ type: 'ERROR', data: { message: err.message } });
          }),
        );
      },
    },
  });

export type AiAnalysisFrequencyService = ActorRefFrom<
  typeof aiAnalysisFrequencyDataMachine
>;
