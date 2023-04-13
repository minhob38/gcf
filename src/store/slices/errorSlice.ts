import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isSignInError: boolean;
}

const initialState: IState = {
  isSignInError: false,
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
    throwSignInError: (state) => {
      state.isSignInError = true;
    },
    catchSignInError: (state) => {
      state.isSignInError = false;
    },
  },
});

export const actions = errorSlice.actions;
export default errorSlice.reducer;
