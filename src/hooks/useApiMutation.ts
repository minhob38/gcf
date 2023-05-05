import { useMutation } from "react-query";
import * as api from "@apis/functions";
import { useTypedDispatch, useTypedSelector } from "./useStore";
import { actions as modalActions } from "@store/slices/modalSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { actions as authActions } from "@store/slices/authSlice";
import { actions as userActions } from "@store/slices/userSlice";

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

/**
 * @description 로그인 mutation 함수
 */
export const useLoginMutation = () => {
  const dispatch = useTypedDispatch();
  const userId = useTypedSelector((state) => state.rootReducer.userReducer.userId);
  const mutation = useMutation(api.loginApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwLoginError(errorMessage));
    },
    onSuccess: async (data, variables, context) => {
      // 로그인 성공 시, 로컬스토리지 로그인상태를 true로 변경
      dispatch(userActions.authenticate());

      if (process.env.NODE_ENV === "production") {
        // data에서 user id 가져오기
        const userId = data?.userId;

        if (!userId) return;
        const myInfo = await api.findMeApi(userId);

        if (!myInfo) return;
        dispatch(userActions.findMe({ userId, ...myInfo }));

        return;
      }

      // development 환경
      if (!userId) return;
      const myInfo = await api.findMeApi(userId);
      if (!myInfo) return;
      dispatch(userActions.findMe({ userId, ...myInfo }));

      return;
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description pickup 요청 mutation 함수
 */
export const usePickUpMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.pickUpRequestApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description telcom 요청 mutation 함수
 */
export const useTelcomMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.telcomRequestApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description move 요청 mutation 함수
 */
export const useMoveMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.moveRequestApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description pickup cancel mutation 함수
 */
export const usePickupCancelMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.pickupCancelApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      // 여기에 매개변수를 넣게???
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description pickup cancel mutation 함수
 */
export const useTelocmCancelMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.telcomCancelApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      // 여기에 매개변수를 넣게???
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};

/**
 * @description move cancel mutation 함수
 */
export const useMoveCancelMutation = () => {
  const dispatch = useTypedDispatch();
  const mutation = useMutation(api.moveCancelApi, {
    onMutate: (variables) => {
      dispatch(modalActions.showLoading());
    },
    onError: (error, variables, context) => {
      const errorMessage = (error as Error).message;
      dispatch(errorActions.throwPickUpTelcomMoveError(errorMessage));
    },
    onSuccess: (data, variables, context) => {
      // 여기에 매개변수를 넣게???
      dispatch(modalActions.showPickupTelcomMoveNotification());
    },
    onSettled: () => {
      dispatch(modalActions.hideLoading());
    },
  });

  return mutation;
};
