import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // checkStatus: "sign-up" | "sign-in";
  name: string | null;
  email: string | null;
  password: string | null;
  rePassword: string | null;
  isAuthenticated: boolean;
}

const initialState: IState = {
  // checkStatus: "sign-up",
  name: null,
  email: null,
  password: null,
  rePassword: null,
  isAuthenticated: process.env.NODE_ENV === "production" ? false : true,
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
    // checkSignUp: (state) => {
    //   state.checkStatus = "sign-up";
    // },
    // checkSignIn: (state) => {
    //   state.checkStatus = "sign-in";
    // },

    authenticate: (state) => {
      state.isAuthenticated = true;
      // 나중에 401 error 받으면, 로그인 정보 지우기
    },
    unAuthenticate: (state) => {
      state.isAuthenticated = false;
      // 나중에 401 error 받으면, 로그인 정보 지우기
    },
    textInput: (state, action: PayloadAction<React.ChangeEvent<HTMLInputElement>["target"]>) => {
      const { name, value } = action.payload;
      switch (name) {
        case "name":
          state.name = value;
          break;
        case "email":
          state.email = value;
          break;
        case "password":
          state.password = value;
          break;
        case "re-password":
          state.rePassword = value;
          break;
        default:
      }
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
