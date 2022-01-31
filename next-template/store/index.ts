import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer,
  },
  middleware: [logger],
});

const createStore = () => store;

export const wrapper = createWrapper(createStore);
