import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import * as fromUser from './user/user.reducers';

export interface AppState {
  readonly router: RouterState;
  readonly user: fromUser.UserState;
}

export const initialAppState: Omit<AppState, 'router'> = {
  user: fromUser.initialUserState,
};

export const createRootReducer = (
  history: History,
): Reducer<CombinedState<AppState>, AnyAction> => {
  return combineReducers<AppState>({
    router: connectRouter(history),
    user: fromUser.userReducer,
  });
};
