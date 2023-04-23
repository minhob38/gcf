import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isLoginWarning: boolean;
  isLoading: boolean;
  isSignUpNotification: boolean;
}

const initialState: IState = {
  isLoginWarning: false,
  isLoading: false,
  isSignUpNotification: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    // 로그인이 필요한 서비스 경고 모달
    showLoginWarning: (state) => {
      state.isLoginWarning = true;
    },
    hideLoginWarning: (state) => {
      state.isLoginWarning = false;
    },
    // 로딩 모달
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    // 회원가입 성공 알림 모달
    showSignUpNotification: (state) => {
      state.isSignUpNotification = true;
    },
    hideSignUpNotification: (state) => {
      state.isSignUpNotification = false;
    },
  },
});

export const actions = modalSlice.actions;
export default modalSlice.reducer;
