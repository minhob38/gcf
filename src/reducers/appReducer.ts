// ducks pattern: https://github.com/erikras/ducks-modular-redux
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions types
const CLICK_BUTTON = "app/CLICK_BUTTON";
const CLICK_BUTTON_ASYNC = "app/CLICK_BUTTON_ASYNC";

// action creators
export const clickButton = createAction(CLICK_BUTTON);
export const clickButtonAsync = createAction(CLICK_BUTTON_ASYNC);
// ↑ export const disableLoading = () => ({ type: "app/CLICK_BUTTON_ASYNC" });

//sagas
function* clickButtonSaga(action) {
  console.log(action);
  yield delay(3000);
  yield put(clickButton());
}

export function* appSaga() {
  yield takeLatest(clickButtonAsync, clickButtonSaga);
}

const initialState = {
  isClicked: false,
};

const appReducer = handleActions(
  {
    [CLICK_BUTTON]: (state, action) => {
      return produce(state, (draft) => {
        draft.isClicked = !draft.isClicked;
      });
    },
  },
  initialState,
);

export default appReducer;
