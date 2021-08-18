import { AxiosStatic } from 'axios';
import { Store } from 'redux';
import { AppAction } from './store/actions';
import { AppState } from './store/reducers';
import { isUserInitialized } from './store/user/user.reducers';

export function setupAxios(
  axios: AxiosStatic,
  store: Store<AppState, AppAction>,
): void {
  axios.interceptors.request.use(
    (config) => {
      const { user } = store.getState();
      if (isUserInitialized(user)) {
        const {
          userData: { token },
        } = user;
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );
}
