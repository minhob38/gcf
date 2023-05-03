import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import logger from "redux-logger";
import authReducer from "@store/slices/authSlice";
import pickupReducer from "@store/slices/pickupSlice";
import telcomReducer from "@store/slices/telcomSlice";
import modalReducer from "@store/slices/modalSlice";
import moveReducer from "@store/slices/moveSlice";
import carReducer from "@store/slices/carSlice";
import errorReducer from "@store/slices/errorSlice";

export function* rootSaga() {
  yield all([]);
}
const sagaMiddleware = createSagaMiddleware();
const middleware: any = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// combine으로 합치지 않아도 됩니다. (코드정리를 위해 rootReducer로 묶었습니다.)
const rootReducer = combineReducers({
  authReducer,
  pickupReducer,
  telcomReducer,
  moveReducer,
  carReducer,
  modalReducer,
  errorReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
