import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// https://redux-toolkit.js.org/api/createSlice

const initialState = {
  isClicked: false,
};
// [CLICK_BUTTON]
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clickButton: (state, action) => {
      state.isClicked = !state.isClicked;
    },
  },

  // extraReducers: {},
});

export const actionCreators = appSlice.actions;

export default appSlice.reducer;
