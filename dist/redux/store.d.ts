import { DemoSlice } from "./reducers/demoSlice";
export type { DemoSlice } from "./reducers/demoSlice";
export interface ApplicationState {
    demo: DemoSlice;
}
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    demo: DemoSlice;
}, import("@reduxjs/toolkit").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    demo: DemoSlice;
}, import("@reduxjs/toolkit").AnyAction>]>;
/** Export actions for each reduce */
export declare const demoActions: {
    demoSlice_asyncDemoThunk: import("@reduxjs/toolkit").AsyncThunk<string, void, {
        state: ApplicationState;
        dispatch?: import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction> | undefined;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    toggleTestBool: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"demo/toggleTestBool">;
    updateTestString: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "demo/updateTestString">;
    resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"demo/resetState">;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
