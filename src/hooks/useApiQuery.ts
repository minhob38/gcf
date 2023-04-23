import { useMutation, useQuery } from "react-query";
import * as api from "@apis/functions";
import { useTypedDispatch } from "./useStore";
import { actions as modalActions } from "@store/slices/modalSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { actions as authActions } from "@store/slices/authSlice";

/**
 * @description my pickup 조회 query 함수
 */
export const useMyPickupBookingQuery = (userId: number) => {
  const dispatch = useTypedDispatch();

  const query = useQuery(["my-pickup", userId], api.findMyPickupApi, {
    onError: (error) => {
      // const errorMessage = (error as Error).message;
      // dispatch(errorActions.throwSignUpError(errorMessage));
    },
    onSuccess: (data) => {
      console.log(data);
      // dispatch(modalActions.showSignUpNotification());
    },
    onSettled: () => {
      // dispatch(modalActions.hideLoading());
    },
  });

  return query;
};
