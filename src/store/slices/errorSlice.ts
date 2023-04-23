import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  signUpErrorMessage: string | null;
  loginErrorMessage: string | null;
}

const initialState: IState = {
  signUpErrorMessage: null,
  loginErrorMessage: null,
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
    // 회원가입 에러
    throwSignUpError: (state, action: PayloadAction<string>) => {
      state.signUpErrorMessage = action.payload;
    },
    catchSignUpError: (state) => {
      state.signUpErrorMessage = null;
    },
    // 로그인 에러
    throwLoginError: (state, action: PayloadAction<string>) => {
      state.loginErrorMessage = action.payload;
    },
    catchLoginError: (state) => {
      state.loginErrorMessage = null;
    },
  },
});

export const actions = errorSlice.actions;
export default errorSlice.reducer;
