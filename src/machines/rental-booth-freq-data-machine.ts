import axios from 'axios';
import { catchError, from, mergeMap, of } from 'rxjs';
import { AccountEntriesFrequencyResponse } from 'src/features/dashboard/models/account-entries.models';
import { ActorRefFrom } from 'xstate';
import { dataMachine } from './data-machine';

// TODO: Change data model and endpoint when ready
export const rentalBoothFrequencyDataMachine =
  dataMachine<AccountEntriesFrequencyResponse>(
    'rental-booth-frequency-data',
  ).withConfig({
    services: {
      fetchData: (_context, _event) => {
        return from(
          axios.get<AccountEntriesFrequencyResponse>(
            '/dmos/api/accountEntries/frequency',
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

export type RentalBoothFrequencyService = ActorRefFrom<
  typeof rentalBoothFrequencyDataMachine
>;
