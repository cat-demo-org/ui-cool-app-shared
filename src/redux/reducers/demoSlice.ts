import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../store";
import { sleep } from "../../util/misc";

export interface DemoSlice {
    testBool: boolean;
    testStrArr: string[];
    testString: string;
}

const initialDemoState: DemoSlice = {
    testBool: false,
    testStrArr: ["a", "b"],
    testString: "testing_string",
};

/////////////////////
// Reducer Thunks //
///////////////////

// Thunk actions should only resolve, do not resolve with rejection -- Handle in builder.addCase to reduce cases

const demoSlice_asyncDemoThunk = createAsyncThunk<
    string,
    void,
    { state: ApplicationState }
>("/registration/requestRegistration", async (_, thunkApi) => {
    const state: ApplicationState = thunkApi.getState(); // If needed for async calls, etc
    await sleep(4000);
    const res = "some_string" + state.demo.testString;
    return res;
});

////////////////////
// Reducer Slice //
//////////////////

export const demoSlice = createSlice({
    name: "demo",
    initialState: initialDemoState,
    reducers: {
        toggleTestBool: (state: DemoSlice) => {
            state.testBool = !state.testBool;
        },
        updateTestString: (
            state: DemoSlice,
            { payload }: { payload: string }
        ) => {
            state.testString = payload;
        },
        resetState: <Key extends keyof DemoSlice>(state: DemoSlice) => {
            Object.keys(state).forEach((key) => {
                state[key as Key] = initialDemoState[key as Key];
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            demoSlice_asyncDemoThunk.fulfilled,
            (state, { payload }) => {
                state.testString = payload;
            }
        );
    },
});

export const _demoActions = { ...demoSlice.actions, demoSlice_asyncDemoThunk };
