import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppState } from 'src/store/reducers';
import { AppDispatch } from 'src/store/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
