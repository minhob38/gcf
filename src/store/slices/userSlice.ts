import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  userId: number | null;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

const initialState: IState = {
  userId: 1, //process.env.NODE_ENV === "production" ? null : 1,
  name: "SADSAD",
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

    login: (state, action: PayloadAction<number>) => {
      console.log("login");
      // state.userId = action.payload;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
