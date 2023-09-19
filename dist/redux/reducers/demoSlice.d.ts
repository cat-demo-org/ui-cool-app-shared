import { ApplicationState } from "../store";
export interface DemoSlice {
    testBool: boolean;
    testStrArr: string[];
    testString: string;
}
export declare const demoSlice: import("@reduxjs/toolkit").Slice<DemoSlice, {
    toggleTestBool: (state: DemoSlice) => void;
    updateTestString: (state: DemoSlice, { payload }: {
        payload: string;
    }) => void;
    resetState: <Key extends keyof DemoSlice>(state: DemoSlice) => void;
}, "demo">;
export declare const _demoActions: {
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
