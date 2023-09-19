var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/redux/index.ts
var redux_exports = {};
__export(redux_exports, {
  demoActions: () => demoActions,
  extractDemoSlice: () => extractDemoSlice,
  store: () => store,
  useAppDispatch: () => useAppDispatch,
  useAppSelector: () => useAppSelector
});

// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";

// src/redux/reducers/demoSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// src/util/misc.ts
var misc_exports = {};
__export(misc_exports, {
  sleep: () => sleep
});
var sleep = async (ms) => new Promise((res) => setTimeout(res, ms));

// src/redux/reducers/demoSlice.ts
var initialDemoState = {
  testBool: false,
  testStrArr: ["a", "b"],
  testString: "testing_string"
};
var demoSlice_asyncDemoThunk = createAsyncThunk("/registration/requestRegistration", async (_, thunkApi) => {
  const state = thunkApi.getState();
  await sleep(4e3);
  const res = "some_string" + state.demo.testString;
  return res;
});
var demoSlice = createSlice({
  name: "demo",
  initialState: initialDemoState,
  reducers: {
    toggleTestBool: (state) => {
      state.testBool = !state.testBool;
    },
    updateTestString: (state, { payload }) => {
      state.testString = payload;
    },
    resetState: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = initialDemoState[key];
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      demoSlice_asyncDemoThunk.fulfilled,
      (state, { payload }) => {
        state.testString = payload;
      }
    );
  }
});
var _demoActions = { ...demoSlice.actions, demoSlice_asyncDemoThunk };

// src/redux/store.ts
var store = configureStore({
  reducer: {
    demo: demoSlice.reducer
  }
});
var demoActions = _demoActions;

// src/redux/hooks.ts
import { useDispatch, useSelector } from "react-redux";
var useAppDispatch = useDispatch;
var useAppSelector = useSelector;
var extractDemoSlice = (state) => state.demo;

// src/util/index.ts
var util_exports = {};
__export(util_exports, {
  misc: () => misc_exports
});

// src/configuration/index.ts
var configuration_exports = {};
__export(configuration_exports, {
  coolAppConfiguration: () => coolAppConfiguration
});
var coolAppConfiguration = {
  testConfigEntry: "testConfigEntry"
};

// src/index.ts
import * as demoSDK from "demo-api-sdk";
export {
  configuration_exports as config,
  demoSDK,
  redux_exports as redux,
  util_exports as util
};
//# sourceMappingURL=index.js.map
