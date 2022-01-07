// ducks pattern: https://github.com/erikras/ducks-modular-redux
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions types
const ENABLE_LOADING = "app/ENABLE_LOADING";
const DISABLE_LOADING = "app/DISABLE_LOADING";

// action creators
export const enableLoading = createAction(ENABLE_LOADING);
export const disableLoading = createAction(DISABLE_LOADING);
// ↑ export const disableLoading = () => ({ type: "app/DISABLE_LOADING" });

export function* appSaga() {
  //
}

const initialState = {
  isLoading: false,
};

const appReducer = handleActions(
  {
    [ENABLE_LOADING]: (state, action) => {
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    },
    [DISABLE_LOADING]: (state, action) => {
      return produce(state, (draft) => {
        draft.isLoading = false;
      });
    },
  },
  initialState,
);

export default appReducer;
