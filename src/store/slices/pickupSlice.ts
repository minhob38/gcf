import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as variables from "@constants/variables";

interface IState {
  // checkStatus: "sign-up" | "sign-in";
  // name: string | null;
  // email: string | null;
  // password: string | null;

  year: string;
  month: string;
  date: string;
  hour: string;
  minute: string;
  departure: string;
  arrival: string;
  flightNumber: string;
}

const initialState: IState = {
  year: variables.SELECT_DEFAULT_TEXT,
  month: variables.SELECT_DEFAULT_TEXT,
  date: variables.SELECT_DEFAULT_TEXT,
  hour: variables.SELECT_DEFAULT_TEXT,
  minute: variables.SELECT_DEFAULT_TEXT,
  departure: variables.SELECT_DEFAULT_TEXT,
  arrival: variables.SELECT_DEFAULT_TEXT,
  flightNumber: variables.SELECT_DEFAULT_TEXT,
};

const pickupSlice = createSlice({
  name: "pickup",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },

    selectInput: (state, action: PayloadAction<React.ChangeEvent<HTMLSelectElement>["target"]>) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const actions = pickupSlice.actions;
export default pickupSlice.reducer;
