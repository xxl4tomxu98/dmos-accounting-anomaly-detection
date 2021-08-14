import { combineEpics, Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs';
import { fetchHero } from 'src/features/heroes/store/heroes.actions';
import { AppAction } from 'src/store/actions';
import { AppState } from 'src/store/reducers';
import { UserActionTypes } from './user.actions';

export const setUserDataEpic: Epic<AppAction, AppAction, AppState> = (
  actions$,
) => {
  return actions$.pipe(
    ofType(UserActionTypes.SET_USER_DATA),
    mapTo(fetchHero()),
  );
};

export const userEpics = combineEpics(setUserDataEpic);
