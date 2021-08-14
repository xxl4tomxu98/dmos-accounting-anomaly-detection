import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { UserAction, UserActionTypes } from './user.actions';

export enum UserStatus {
  IDLE = 'IDLE',
  INITIALIZED = 'INITIALIZED',
}
export interface UserData {
  token: string;
  roles: string[];
}

export interface InitializedUserState {
  readonly status: UserStatus.INITIALIZED;
  readonly userData: UserData;
}
export interface IdleUserState {
  readonly status: UserStatus.IDLE;
}

export type UserState = InitializedUserState | IdleUserState;
export function isUserInitialized(
  user: UserState,
): user is InitializedUserState {
  if (user.status === UserStatus.INITIALIZED) return true;

  return false;
}

export const initialUserState: UserState = {
  status: UserStatus.IDLE,
};

export function userReducer(
  state: UserState = initialUserState,
  action: UserAction,
): UserState {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA: {
      return {
        ...state,
        status: UserStatus.INITIALIZED,
        userData: { ...action.payload },
      };
    }
    case UserActionTypes.CLEAR_USER_DATA: {
      return initialUserState;
    }
    default:
      return state;
  }
}

export const selectUserState = createSelector(
  (state: AppState) => state.user,
  (state) => state,
);

export const selectUserStatus = createSelector(
  selectUserState,
  (state) => state.status,
);
