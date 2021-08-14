import { isNullish } from 'src/types/aliases-and-guards';

interface ActionWithPayload<T, P> {
  readonly type: T;
  readonly payload: P;
}
interface ActionWithoutPayload<T> {
  readonly type: T;
}
export type Action<T, P = void> = P extends void
  ? ActionWithoutPayload<T>
  : ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P,
): Action<T, P>;
export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): ActionWithPayload<T, P> | ActionWithoutPayload<T> {
  if (!isNullish(payload)) {
    return { type, payload };
  }
  return { type };
}
