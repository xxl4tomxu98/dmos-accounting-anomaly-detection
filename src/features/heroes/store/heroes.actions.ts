import { Action, createAction } from 'src/store/action-utils';
import { Hero } from '../models/hero.model';

export enum HeroesActionTypes {
  FETCH_HERO = '[hero] Fetch Hero',
  FETCH_HERO_SUCCESS = '[hero] Fetch Hero Success',
  FETCH_HERO_FAILURE = '[hero] Fetch Hero Failure',
  HERO_LOADING = '[hero] Set Hero Loading',
}

export type FetchHeroAction = Action<typeof HeroesActionTypes.FETCH_HERO>;
export type FetchHeroSuccess = Action<
  typeof HeroesActionTypes.FETCH_HERO_SUCCESS,
  { heroes: readonly Hero[] }
>;
export type FetchHeroFailure = Action<
  typeof HeroesActionTypes.FETCH_HERO_FAILURE,
  { message: string }
>;
export type SetHeroLoading = Action<typeof HeroesActionTypes.HERO_LOADING>;

// Action Creators
export function fetchHero(): FetchHeroAction {
  return createAction(HeroesActionTypes.FETCH_HERO);
}
export function fetchHeroSuccess(heroes: readonly Hero[]): FetchHeroSuccess {
  return createAction(HeroesActionTypes.FETCH_HERO_SUCCESS, { heroes });
}
export function fetchHeroFailure(message: string): FetchHeroFailure {
  return createAction(HeroesActionTypes.FETCH_HERO_FAILURE, { message });
}
export function setHeroLoading(): SetHeroLoading {
  return createAction(HeroesActionTypes.HERO_LOADING);
}

// Action types
export type HeroAction =
  | FetchHeroAction
  | FetchHeroSuccess
  | FetchHeroFailure
  | SetHeroLoading;
