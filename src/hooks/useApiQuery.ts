import { useMutation, useQuery, useQueryClient } from "react-query";
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
 * @description my pickup 조회 query client 함수
 */
export const useMyPickupBookingQueryClient = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const queryClient = useQueryClient();
  const apiData = queryClient.getQueryData<Awaited<ReturnType<typeof api.findMyPickupApi>>>([
    "my-pickup",
    userId,
  ]);
  return apiData;
};

/**
 * @description my telcom 조회 query 함수
 */
export const useMyTelcomBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
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

/**
 * @description my telcom 조회 query client 함수
 */
export const useMyTelcomBookingQueryClient = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const queryClient = useQueryClient();
  const apiData = queryClient.getQueryData<Awaited<ReturnType<typeof api.findMyTelcomApi>>>([
    "my-telcom",
    userId,
  ]);
  return apiData;
};

/**
 * @description my move 조회 query 함수
 */
export const useMyMoveBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const query = useQuery(["my-move", userId], api.findMyMoveApi, {
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
 * @description my move 조회 query client 함수
 */
export const useMyMoveQueryClient = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const queryClient = useQueryClient();
  const apiData = queryClient.getQueryData<Awaited<ReturnType<typeof api.findMyMoveApi>>>([
    "my-move",
    userId,
  ]);
  return apiData;
};
