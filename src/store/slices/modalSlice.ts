import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isLoginWarning: boolean;
  isLoading: boolean;
  isSignUpNotification: boolean;
}

const initialState: IState = {
  isLoginWarning: false,
  isLoading: false,
  isSignUpNotification: false,
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
    showLoginWarning: (state) => {
      state.isLoginWarning = true;
    },
    hideLoginWarning: (state) => {
      state.isLoginWarning = false;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    showSignUpNotification: (state) => {
      state.isSignUpNotification = true;
    },
    hideSignUpNotification: (state) => {
      state.isSignUpNotification = false;
    },
  },
});

export const actions = modalSlice.actions;
export default modalSlice.reducer;
