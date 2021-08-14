import { assign, Machine, send } from 'xstate';

enum StopLightColors {
  RED = '#E53E3E',
  GREEN = '#2F855A',
  YELLOW = '#ECC94B',
}

export interface StopLightMachineSchema {
  states: {
    green: Record<string, unknown>;
    yellow: Record<string, unknown>;
    red: Record<string, unknown>;
  };
}

export interface StopLightMachineContext {
  colorSwatchValue: StopLightColors;
}
enum StopLightMachineEvents {
  INIT = 'INIT',
  NEXT = 'NEXT',
}
interface NextEvent {
  type: StopLightMachineEvents.NEXT;
  color: StopLightColors;
}
export type StopLightMachineEventTypes =
  | { type: StopLightMachineEvents.INIT }
  | NextEvent;

export const stopLightMachine = Machine<
  StopLightMachineContext,
  StopLightMachineSchema,
  StopLightMachineEventTypes
>(
  {
    id: 'stop-light-machine',
    initial: 'green',
    context: {
      colorSwatchValue: StopLightColors.GREEN,
    },
    states: {
      green: {
        entry: [
          'updateColorSwatch',
          send(
            {
              type: StopLightMachineEvents.NEXT,
              color: StopLightColors.YELLOW,
            },
            { delay: 1000 },
          ),
        ],
        on: {
          NEXT: 'yellow',
        },
      },
      yellow: {
        entry: [
          'updateColorSwatch',
          send(
            { type: StopLightMachineEvents.NEXT, color: StopLightColors.RED },
            { delay: 1000 },
          ),
        ],
        on: {
          NEXT: 'red',
        },
      },
      red: {
        entry: [
          'updateColorSwatch',
          send(
            { type: StopLightMachineEvents.NEXT, color: StopLightColors.GREEN },
            { delay: 1000 },
          ),
        ],
        on: {
          NEXT: 'green',
        },
      },
    },
  },
  {
    actions: {
      updateColorSwatch: assign((_ctx, event) => ({
        colorSwatchValue: (event as NextEvent).color ?? StopLightColors.GREEN,
      })),
    },
  },
);
