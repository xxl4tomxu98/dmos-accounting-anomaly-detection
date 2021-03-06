import { isUndefined } from 'lodash/fp';
import { assign, createMachine } from 'xstate';

export interface DataFetchMachineContext<TResponseData> {
  data?: TResponseData | undefined;
  errorMessage?: string | undefined;
}

export type DataFetchMachineEvent<TResponseData> =
  | {
      type: 'FETCH';
    }
  | {
      type: 'REFRESH';
    }
  | {
      type: 'RECEIVE_DATA';
      data: TResponseData;
    }
  | {
      type: 'ERROR';
    }
  | {
      type: 'CANCEL';
    };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dataMachine = <TResponseData extends { [key: string]: any }>(
  id: string,
) => {
  return createMachine<
    DataFetchMachineContext<TResponseData>,
    DataFetchMachineEvent<TResponseData>
  >(
    {
      id: id,
      initial: 'idle',
      context: {},
      states: {
        idle: {
          on: {
            REFRESH: {
              target: 'fetching',
            },
            FETCH: {
              target: 'fetching',
              // Only implicitly fetch if no data is available
              cond: 'noData',
            },
          },
          initial: 'noError',
          states: {
            noError: {
              entry: ['clearErrorMessage'],
              initial: 'noData',
              states: {
                noData: {},
                hasData: {},
              },
            },
            errored: {},
          },
        },
        fetching: {
          on: {
            FETCH: {
              target: 'fetching',
            },
            CANCEL: {
              target: 'idle',
            },
            RECEIVE_DATA: {
              target: 'idle.noError.hasData',
              actions: 'assignDataToContext',
            },
            ERROR: {
              target: 'idle.errored',
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
            data: event.data,
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
      },
      guards: {
        noData: (context, _event) => isUndefined(context.data),
      },
    },
  );
};
