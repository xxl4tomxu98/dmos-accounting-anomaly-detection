import { Action, createAction } from '../action-utils';

export enum CounterActionTypes {
  INCREMENT = '[counter] Increment',
  INCREMENT_AND_LOG = '[counter] Increment and log',
  DECREMENT = '[counter] Decrement',
}

export type IncrementAction = Action<typeof CounterActionTypes.INCREMENT>;
export type IncrementAndLogAction = Action<
  typeof CounterActionTypes.INCREMENT_AND_LOG
>;
export type DecrementAction = Action<typeof CounterActionTypes.DECREMENT>;

// Action Creators
export function increment(): IncrementAction {
  return createAction(CounterActionTypes.INCREMENT);
}
export function incrementAndLog(): IncrementAndLogAction {
  return createAction(CounterActionTypes.INCREMENT_AND_LOG);
}
export function decrement(): DecrementAction {
  return createAction(CounterActionTypes.DECREMENT);
}

// Action types
export type CounterAction =
  | IncrementAction
  | IncrementAndLogAction
  | DecrementAction;
