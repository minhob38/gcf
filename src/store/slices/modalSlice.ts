import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isSignInWarning: boolean;
}

const initialState: IState = {
  isSignInWarning: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    showSignInWarning: (state) => {
      state.isSignInWarning = true;
    },
    hideSignInWarning: (state) => {
      state.isSignInWarning = false;
    },
  },
});

export const actions = modalSlice.actions;
export default modalSlice.reducer;
