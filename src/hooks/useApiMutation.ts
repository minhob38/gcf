import { useMutation, UseMutationResult } from "react-query";

export const useApiMutation = <T>(api: any) => {
  const mutation = useMutation(api, {
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
  });

  return mutation as unknown as UseMutationResult<unknown, unknown, T, void>;
};
