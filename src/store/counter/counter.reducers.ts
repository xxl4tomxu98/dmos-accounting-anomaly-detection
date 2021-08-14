import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { CounterAction, CounterActionTypes } from './counter.actions';

export interface CounterState {
  readonly count: number;
}

export const initialCounterState: CounterState = {
  count: 0,
};

export function counterReducer(
  state: CounterState = initialCounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case CounterActionTypes.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}

// Selectors
export const selectCounterState = createSelector(
  (state: AppState) => state.counter,
  (state) => state,
);

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count,
);
