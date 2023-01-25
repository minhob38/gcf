import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  checkStatus: "sign-up" | "sign-in";
  name: string | null;
  email: string | null;
  password: string | null;
}

const initialState: IState = {
  checkStatus: "sign-up",
  name: null,
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
        default:
      }
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
