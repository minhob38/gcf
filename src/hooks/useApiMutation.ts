import { useMutation } from "react-query";
import * as api from "@apis/functions";
import { useTypedDispatch } from "./useStore";
import { actions as modalActions } from "@store/slices/modalSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { actions as authActions } from "@store/slices/authSlice";

export const useApiMutation = <T>(api: any) => {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation<unknown, unknown, T, void>(
    api,
    {
      // mutation.mutate의 callback (.mutate 실행되면 호출)
      onMutate: (variables) => {
        console.log("mutate", variables);
      },
      // error
      onError: (error, variables, context) => {
        console.log("error", error, variables, context);
      },
      // success
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
      },
      // error + success
      onSettled: () => {
        console.log("settled");
      },
    },
  );

  return { mutate, isLoading, isError, error, isSuccess };
};

/**
 * @description 회원가입 mutation 함수
 */
export const useSignUpMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.signUpApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwSignUpError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      dispatch(modalActions.showSignUpNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

export const useLoginMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.loginApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwLoginError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      dispatch(authActions.authenticate());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};
