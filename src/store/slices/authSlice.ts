import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  name: string | null;
  email: string | null;
  password: string | null;
  rePassword: string | null;
}

const initialState: IState = {
  name: null,
  email: null,
  password: null,
  rePassword: null,
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
