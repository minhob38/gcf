import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  userId: number;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

const initialState: IState = {
  userId: 1,
  name: null,
  email: null,
  phoneNumber: null,
};

const userSlice = createSlice({
  name: "user",
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

    // authenticate: (state) => {
    //   state.isAuthenticated = true;
    //   // localstorage에 로그인 정보 저장
    //   // 나중에 401 error 받으면, 로그인 정보 지우기
    //   localStorage.setItem("isAuthenticated", "true");
    // },
    // unAuthenticate: (state) => {
    //   state.isAuthenticated = false;
    //   // localstorage에 로그인 정보 저장
    //   // 나중에 401 error 받으면, 로그인 정보 지우기
    //   localStorage.setItem("isAuthenticated", "false");
    // },
    // textInput: (state, action: PayloadAction<React.ChangeEvent<HTMLInputElement>["target"]>) => {
    //   const { name, value } = action.payload;
    //   switch (name) {
    //     case "name":
    //       state.name = value;
    //       break;
    //     case "email":
    //       state.email = value;
    //       break;
    //     case "password":
    //       state.password = value;
    //       break;
    //     case "re-password":
    //       state.rePassword = value;
    //       break;
    //     default:
    //   }
    // },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
