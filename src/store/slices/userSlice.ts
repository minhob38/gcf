import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  userId: number | null;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

const initialState: IState = {
  userId: null,
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

    login: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
      console.log("stateee");
      console.log(state.userId);
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
