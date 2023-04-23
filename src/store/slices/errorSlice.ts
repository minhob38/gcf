import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // isSignUpError: boolean;
  isLoginError: boolean;
}

const initialState: IState = {
  isLoginError: false,
  // isSignUpError: false,
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
    // // 회원가입 에러
    // throwSignUpError: (state) => {
    //   state.isLoginError = true;
    // },
    // catchSignUpError: (state) => {
    //   state.isLoginError = false;
    // },
    // 로그인 에러
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
