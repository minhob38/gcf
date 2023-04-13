import { useMutation } from "react-query";
import * as api from "@apis/functions";
import { useTypedDispatch } from "./useStore";
import { actions as modalActions } from "@store/slices/modalSlice";

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

export const useSignInMutation = () => {
  const dispatch = useTypedDispatch();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(api.signInApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      console.log("error", error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });
  return { mutate, isLoading, isError, error, isSuccess };
};
