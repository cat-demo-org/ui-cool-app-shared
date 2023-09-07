import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch, type ApplicationState } from './store';
import { DemoSlice } from './reducers/demoSlice';

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Pure Selectors
export const extractDemoSlice = (state: ApplicationState): DemoSlice => state.demo;