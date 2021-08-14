import { combineEpics, Epic, ofType } from 'redux-observable';
import { mapTo, tap, withLatestFrom } from 'rxjs';
import { AppAction } from '../actions';
import { AppState } from '../reducers';
import { CounterActionTypes, increment } from './counter.actions';

export const incrementAndLogEpic: Epic<AppAction, AppAction, AppState> = (
  actions$,
  state$,
) => {
  return actions$.pipe(
    ofType(CounterActionTypes.INCREMENT_AND_LOG),
    withLatestFrom(state$),
    tap(([, { counter }]) => {
      console.log('current count', counter.count + 1);
    }),
    mapTo(increment()),
  );
};

export const counterEpics = combineEpics(incrementAndLogEpic);
