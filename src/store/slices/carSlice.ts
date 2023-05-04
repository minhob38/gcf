import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as variables from "@constants/variables";
import { ECAR_SEARCH_TYPE } from "types/enum";

interface IState {
  carSearchType: ECAR_SEARCH_TYPE;
  minimumPrice: string;
  maximumPrice: string;
}

const initialState: IState = {
  carSearchType: ECAR_SEARCH_TYPE.NEW,
  minimumPrice: variables.SELECT_MIN_PRICE_DEFAULT_TEXT,
  maximumPrice: variables.SELECT_MAX_PRICE_DEFAULT_TEXT,
};

const carSlice = createSlice({
  name: "car",
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

    changeSearchType: (state, action: PayloadAction<ECAR_SEARCH_TYPE>) => {
      state.carSearchType = action.payload;
    },
  },
});

export const actions = carSlice.actions;
export default carSlice.reducer;
