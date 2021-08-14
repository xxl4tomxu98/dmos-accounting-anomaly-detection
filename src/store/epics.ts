/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { heroesEpics } from 'src/features/heroes/store/heroes.epics';
import { counterEpics } from './counter/counter.epics';
import { userEpics } from './user/user.epics';

export const rootEpic: Epic<Action<any>, Action<any>> = combineEpics(
  counterEpics,
  heroesEpics,
  userEpics,
);
