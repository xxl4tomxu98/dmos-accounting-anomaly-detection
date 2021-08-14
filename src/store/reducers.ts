import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import * as fromHeroes from 'src/features/heroes/store/heroes.reducers';
import * as fromCounter from './counter/counter.reducers';
import * as fromUser from './user/user.reducers';

export interface AppState {
  readonly counter: fromCounter.CounterState;
  readonly router: RouterState;
  readonly user: fromUser.UserState;
  readonly heroes: fromHeroes.HeroesState;
}

export const initialAppState: Omit<AppState, 'router'> = {
  counter: fromCounter.initialCounterState,
  user: fromUser.initialUserState,
  heroes: fromHeroes.initialHeroesState,
};

export const createRootReducer = (
  history: History,
): Reducer<CombinedState<AppState>, AnyAction> => {
  return combineReducers<AppState>({
    counter: fromCounter.counterReducer,
    router: connectRouter(history),
    user: fromUser.userReducer,
    heroes: fromHeroes.heroReducer,
  });
};
