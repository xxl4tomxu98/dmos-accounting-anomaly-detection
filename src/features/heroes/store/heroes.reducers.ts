import { createSelector } from 'reselect';
import { AppState } from 'src/store/reducers';
import { CallStatus } from 'src/types/call-status';
import { Hero } from '../models/hero.model';
import { HeroAction, HeroesActionTypes } from './heroes.actions';

export interface HeroSuccessState {
  readonly status: CallStatus.SUCCESS;
  readonly heroes: Hero[];
}
export interface HeroErrorState {
  readonly status: CallStatus.FAILURE;
  readonly errorMessage: string;
}
export function isHeroSuccessState(
  state: HeroesState,
): state is HeroSuccessState {
  if (state.status === CallStatus.SUCCESS) {
    return true;
  }
  return false;
}

export type HeroesState =
  | HeroSuccessState
  | HeroErrorState
  | {
      readonly status: CallStatus.IDLE;
    }
  | {
      readonly status: CallStatus.LOADING;
    };

export const initialHeroesState: HeroesState = {
  status: CallStatus.IDLE,
};
function canFetchHeroStates(
  state: HeroesState,
  action: HeroAction,
): HeroesState {
  switch (action.type) {
    case HeroesActionTypes.HERO_LOADING: {
      return {
        ...state,
        status: CallStatus.LOADING,
      };
    }
    default:
      return state;
  }
}
function handleLoadingState(
  state: HeroesState,
  action: HeroAction,
): HeroesState {
  switch (action.type) {
    case HeroesActionTypes.FETCH_HERO_FAILURE: {
      return {
        ...state,
        status: CallStatus.FAILURE,
        errorMessage: action.payload.message,
      };
    }
    case HeroesActionTypes.FETCH_HERO_SUCCESS: {
      return {
        ...state,
        status: CallStatus.SUCCESS,
        heroes: [...action.payload.heroes],
      };
    }
    default:
      return state;
  }
}

export function heroReducer(
  state: HeroesState = initialHeroesState,
  action: HeroAction,
): HeroesState {
  switch (state.status) {
    case CallStatus.SUCCESS:
    case CallStatus.FAILURE:
    case CallStatus.IDLE: {
      return canFetchHeroStates(state, action);
    }
    case CallStatus.LOADING: {
      return handleLoadingState(state, action);
    }
    default:
      return state;
  }
}

export const selectHeroesState = createSelector(
  (state: AppState) => state.heroes,
  (state) => state,
);

export const selectHeroesStatus = createSelector(selectHeroesState, (state) => {
  return state.status;
});
export const selectHeroes = createSelector(selectHeroesState, (state) => {
  if (isHeroSuccessState(state)) {
    return state.heroes;
  } else {
    return [];
  }
});
