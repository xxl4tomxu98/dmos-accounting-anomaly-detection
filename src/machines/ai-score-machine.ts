import { catchError, delay, mergeMap, of } from 'rxjs';
import { assign, createMachine } from 'xstate';

export interface AiScoreMachineContext {
  data: {
    score: number | undefined;
    description: string | undefined;
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
        score: undefined,
        description: '--',
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
          score: undefined,
          description: undefined,
        },
      })),
    },
    services: {
      fetchData: (_context, _event) => {
        return of({
          score: 50,
          description: 'Meh.',
        }).pipe(
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
