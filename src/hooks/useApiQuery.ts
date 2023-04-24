import { useMutation, useQuery } from "react-query";
import * as api from "@apis/functions";
import { useTypedDispatch, useTypedSelector } from "./useStore";
import { actions as modalActions } from "@store/slices/modalSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { actions as authActions } from "@store/slices/authSlice";

/**
 * @description my pickup 조회 query 함수
 */
export const useMyPickupBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const query = useQuery(["my-pickup", userId], api.findMyPickupApi, {
    refetchOnWindowFocus: false,
    retry: 0,
    suspense: true,
    onError: (error) => {
      // const errorMessage = (error as Error).message;
      // dispatch(errorActions.throwSignUpError(errorMessage));
    },
    onSuccess: (data) => {
      // dispatch(modalActions.showSignUpNotification());
    },
    onSettled: () => {
      // dispatch(modalActions.hideLoading());
    },
  });

  return query;
};

/**
 * @description my telcom 조회 query 함수
 */
export const useMyTelcomBookingQuery = (userId: number) => {
  const query = useQuery(["my-telcom", userId], api.findMyTelcomApi, {
    refetchOnWindowFocus: false,
    retry: 0,
    suspense: true,
    onError: (error) => {
      // const errorMessage = (error as Error).message;
      // dispatch(errorActions.throwSignUpError(errorMessage));
    },
    onSuccess: (data) => {
      // dispatch(modalActions.showSignUpNotification());
    },
    onSettled: () => {
      // dispatch(modalActions.hideLoading());
    },
  });

  return query;
};
