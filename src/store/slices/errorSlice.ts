import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isLoginError: boolean;
}

const initialState: IState = {
  isLoginError: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    throwLoginError: (state) => {
      state.isLoginError = true;
    },
    catchLoginError: (state) => {
      state.isLoginError = false;
    },
  },
});

export const actions = errorSlice.actions;
export default errorSlice.reducer;
