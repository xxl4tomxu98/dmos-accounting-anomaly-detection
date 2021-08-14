import { HeroAction } from 'src/features/heroes/store/heroes.actions';
import { CounterAction } from './counter/counter.actions';
import { UserAction } from './user/user.actions';

export type AppAction = CounterAction | UserAction | HeroAction;
