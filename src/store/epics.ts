/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from 'redux';
import { combineEpics, Epic } from 'redux-observable';

export const rootEpic: Epic<Action<any>, Action<any>> = combineEpics();
