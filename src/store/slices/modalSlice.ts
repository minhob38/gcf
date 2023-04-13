import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isSignInWarning: boolean;
  isLoading: boolean;
}

const initialState: IState = {
  isSignInWarning: false,
  isLoading: false,
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
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const actions = modalSlice.actions;
export default modalSlice.reducer;
