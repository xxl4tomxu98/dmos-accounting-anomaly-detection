import axios from 'axios';
import { catchError, delay, from, mergeMap, of } from 'rxjs';
import { assign, createMachine } from 'xstate';

export interface AiScoreMachineContext {
  data: {
    anomalyCount: number | undefined;
    createDate: string | undefined;
  };
  errorMessage?: string | undefined;
}

export type AiScoreMachineEvent =
  | {
      type: 'FETCH';
    }
  | {
      type: 'RECEIVE_DATA';
      data: AiScoreMachineContext;
    }
  | {
      type: 'ERROR';
    }
  | {
      type: 'CANCEL';
    };

export const aiScoreMachine = createMachine<
  AiScoreMachineContext,
  AiScoreMachineEvent
>(
  {
    id: 'ai-score-machine',
    context: {
      data: {
        anomalyCount: undefined,
        createDate: '--',
      },
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          FETCH: {
            target: 'fetching',
          },
        },
        initial: 'noError',
        states: {
          noError: {},
          hasError: {},
        },
      },
      fetching: {
        entry: 'resetContext',
        on: {
          FETCH: {
            target: 'fetching',
          },
          CANCEL: {
            target: 'idle',
          },
          RECEIVE_DATA: {
            target: 'idle.noError',
            actions: 'assignDataToContext',
          },
          ERROR: {
            target: 'idle.hasError',
            actions: 'assignErrorToContext',
          },
        },
        invoke: {
          src: 'fetchData',
        },
      },
    },
  },
  {
    actions: {
      assignDataToContext: assign((_context, event) => {
        if (event.type !== 'RECEIVE_DATA') return {};
        return {
          data: event.data.data,
        };
      }),
      clearErrorMessage: assign((_ctx, _event) => {
        return {
          errorMessage: undefined,
        };
      }),
      assignErrorToContext: assign((_context, event: any) => {
        return {
          errorMessage: event.data?.message || 'An unknown error occurred',
        };
      }),
      resetContext: assign((_context) => ({
        data: {
          anomalyCount: undefined,
          createDate: undefined,
        },
      })),
    },
    services: {
      fetchData: (_context, _event) => {
        return from(
          axios.get<AiScoreMachineContext>(
            '/dmos/api/reports/anomalyScoreCountByMonth',
            {
              params: {
                anomalyScore: 1.3511,
              },
            },
          ),
        ).pipe(
          mergeMap((data) => {
            return of({ type: 'RECEIVE_DATA', data: { data } });
          }),
          catchError((err: Error) => {
            return of({ type: 'ERROR', data: { message: err.message } });
          }),
          delay(1000),
        );
      },
    },
  },
);
