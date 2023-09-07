import { configureStore } from "@reduxjs/toolkit";
import { DemoSlice, _demoActions, demoSlice } from "./reducers/demoSlice";
export type { DemoSlice } from "./reducers/demoSlice"; 

export interface ApplicationState {
    demo: DemoSlice;
}

export const store = configureStore({
    reducer: {
        demo: demoSlice.reducer,
    },
});

/** Export actions for each reduce */
export const demoActions = _demoActions;

// Export Rootstate and Dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add debug panel func to console
// window.debugPanel = () => store.dispatch(debugActions.toggleDebugPanel());
