import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // checkStatus: "sign-up" | "sign-in";
  // name: string | null;
  // email: string | null;
  // password: string | null;

  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  departure: string | null;
  arrival: string | null;
  flightNumber: string | null;
}

const initialState: IState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  hour: 0,
  minute: 0,
  departure: null,
  arrival: null,
  flightNumber: null,
};

const pickupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },

    selectInput: (state, action: PayloadAction<React.ChangeEvent<HTMLSelectElement>["target"]>) => {
      const { name, value } = action.payload;

      if (
        name === "year" ||
        name === "month" ||
        name === "date" ||
        name === "hour" ||
        name === "minute"
      ) {
        state[name] = parseInt(value);
        return;
      }

      state[name] = value;
    },
  },
});

export const actions = pickupSlice.actions;
export default pickupSlice.reducer;
