import { Action, createAction } from '../action-utils';
import { UserData } from './user.reducers';

export enum UserActionTypes {
  SET_USER_DATA = '[user] Set User Data',
  CLEAR_USER_DATA = '[user] Clear User Data',
}

export type SetUserData = Action<
  typeof UserActionTypes.SET_USER_DATA,
  UserData
>;
export type ClearUserData = Action<typeof UserActionTypes.CLEAR_USER_DATA>;

// Action Creators
export function setUserData(data: UserData): SetUserData {
  return createAction(UserActionTypes.SET_USER_DATA, data);
}
export function clearUserData(): ClearUserData {
  return createAction(UserActionTypes.CLEAR_USER_DATA);
}

// Action types
export type UserAction = SetUserData | ClearUserData;
