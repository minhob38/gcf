import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // isSignUpError: boolean;
  isLoginError: boolean;
  loginErrorMessage: string | null;
}

const initialState: IState = {
  isLoginError: false,
  loginErrorMessage: null,
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
    throwLoginError: (state, action: PayloadAction<string>) => {
      state.isLoginError = true;
      state.loginErrorMessage = action.payload;
    },
    catchLoginError: (state) => {
      state.isLoginError = false;
      state.loginErrorMessage = null;
    },
    // 로그인에러
  },
});

export const actions = errorSlice.actions;
export default errorSlice.reducer;
