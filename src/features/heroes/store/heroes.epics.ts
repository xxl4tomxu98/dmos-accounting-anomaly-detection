import cond from 'lodash/fp/cond';
import curry from 'lodash/fp/curry';
import stubTrue from 'lodash/fp/stubTrue';
import { combineEpics, Epic, ofType } from 'redux-observable';
import {
  catchError,
  filter,
  from,
  mapTo,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { AppAction } from 'src/store/actions';
import { AppState } from 'src/store/reducers';
import { isUserInitialized } from 'src/store/user/user.reducers';
import { Hero } from '../models/hero.model';
import {
  fetchHeroFailure,
  fetchHeroSuccess,
  HeroesActionTypes,
  setHeroLoading,
} from './heroes.actions';

const isResOk = (res: Response): boolean => res.ok;
const throwError = curry((message: string) => (res: Response) => {
  throw new Error(`${message}: ${res.status}`);
});
const parseResponseAndReturnSuccessAction = (res: Response) => {
  return from<Promise<Hero[]>>(res.json()).pipe(
    mergeMap((res) => {
      return of(fetchHeroSuccess(res));
    }),
  );
};

export const heroLoadingEpic: Epic<AppAction, AppAction, AppState> = (
  actions$,
) => {
  return actions$.pipe(
    ofType(HeroesActionTypes.FETCH_HERO),
    mapTo(setHeroLoading()),
  );
};
export const fetchHeroesEpic: Epic<AppAction, AppAction, AppState> = (
  action$,
  state$,
) => {
  return action$.pipe(
    ofType(HeroesActionTypes.HERO_LOADING),
    withLatestFrom(state$),
    filter(([, state]) => isUserInitialized(state.user)),
    switchMap(([, state]) => {
      let requestOptions: RequestInit = {};
      if (isUserInitialized(state.user)) {
        const { userData } = state.user;
        requestOptions = {
          headers: new Headers({
            Authorization: `Bearer ${userData.token}`,
            Accept: 'application/json',
          }),
        };
      }
      return fromFetch('/dmos/api/heroes', requestOptions).pipe(
        mergeMap((res: Response) => {
          return cond([
            [isResOk, parseResponseAndReturnSuccessAction],
            [stubTrue, throwError('Heroes errored out with status code')],
          ])(res);
        }),
        catchError((error: Error) => {
          console.error(error);
          return of(fetchHeroFailure(error.message));
        }),
      );
    }),
  );
};

export const heroesEpics = combineEpics(fetchHeroesEpic, heroLoadingEpic);
