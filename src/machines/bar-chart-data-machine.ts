import axios from 'axios';
import { catchError, from, mergeMap, of } from 'rxjs';
import { AccountEntriesResponse } from 'src/features/dashboard/models/account-entries.models';
import { ActorRefFrom } from 'xstate';
import { dataMachine } from './data-machine';

type BarChartDataResponse = AccountEntriesResponse;

export const barChartDataMachine = dataMachine<BarChartDataResponse>(
  'bar-chart-data',
).withConfig({
  services: {
    fetchData: (_context, _event) => {
      return from(
        axios.get<AccountEntriesResponse>('/dmos/api/accountEntries'),
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

export type BarChartService = ActorRefFrom<typeof barChartDataMachine>;
