import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  checkStatus: "sign-up" | "sign-in";
  email: string | null;
  password: string | null;
}

const initialState: IState = {
  checkStatus: "sign-up",
  email: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    checkSignUp: (state) => {
      state.checkStatus = "sign-up";
    },
    checkSignIn: (state) => {
      state.checkStatus = "sign-in";
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
