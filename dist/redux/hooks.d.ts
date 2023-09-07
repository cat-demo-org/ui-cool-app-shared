import { TypedUseSelectorHook } from 'react-redux';
import { type RootState, type AppDispatch, type ApplicationState } from './store';
import { DemoSlice } from './reducers/demoSlice';
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const extractDemoSlice: (state: ApplicationState) => DemoSlice;
