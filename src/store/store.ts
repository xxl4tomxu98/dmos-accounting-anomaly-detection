import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { AppAction } from './actions';
import { rootEpic } from './epics';
import { AppState, createRootReducer, initialAppState } from './reducers';

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export const store: Store<AppState, AppAction> = createStore<
  AppState,
  AppAction,
  Record<string, unknown>,
  Record<string, unknown>
>(
  createRootReducer(history),
  //@ts-expect-error: Can't include 'router' in the initial state
  initialAppState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), epicMiddleware),
  ),
);

export type AppDispatch = typeof store.dispatch;
export const rootEpicRun = epicMiddleware.run(rootEpic);
