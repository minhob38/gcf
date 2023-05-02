import { useQuery, useQueryClient } from "react-query";
import * as api from "@apis/functions";
import { useTypedSelector } from "./useStore";
import { EQUERY_KEY } from "@constants/query-key";
import { ECAR_SEARCH_TYPE } from "types/enum";

/**
 * @description my pickup 조회 query 함수
 */
export const useMyPickupBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const query = useQuery([EQUERY_KEY.PICKUP, userId], api.findMyPickupApi, {
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
    EQUERY_KEY.PICKUP,
    userId,
  ]);
  return apiData;
};

/**
 * @description my telcom 조회 query 함수
 */
export const useMyTelcomBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const query = useQuery([EQUERY_KEY.TELCOM, userId], api.findMyTelcomApi, {
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
    EQUERY_KEY.TELCOM,
    userId,
  ]);
  return apiData;
};

/**
 * @description my move 조회 query 함수
 */
export const useMyMoveBookingQuery = () => {
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const query = useQuery([EQUERY_KEY.MOVE, userId], api.findMyMoveApi, {
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
    EQUERY_KEY.MOVE,
    userId,
  ]);
  return apiData;
};

/**
 * @description 구매가능한 car 조회 query 함수
 */
export const useCarsSalesQuery = (searchType: ECAR_SEARCH_TYPE) => {
  const query = useQuery([EQUERY_KEY.CAR_SALE, searchType], api.findCarSalesApi, {
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
export const useCarSalesQueryClient = () => {
  const queryClient = useQueryClient();
  const apiData = queryClient.getQueryData<Awaited<ReturnType<typeof api.findMyPickupApi>>>([
    EQUERY_KEY.CAR_SALE,
  ]);
  return apiData;
};
