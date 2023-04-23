import axios from "@configs/axios-config";
import { IPickupRequest, ILoginRequest, ISignUpRequest, IApiResponse } from "types/types";

export const testGetApi = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  const { data } = response;
  await new Promise((resolve, reject) => setTimeout(() => resolve("..."), 3000));
  // throw new Error("error"); -> onError로 감 / onError로 가면 ErrorBoundary 동작
  return data;
};

export const testPostApi = async (input) => {
  console.log("input", input);
  const body = { title: "foo", body: "bar", userId: 1 };
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", body);
  const { data } = response;
  // throw new Error("error"); -> onError로 감
  return data;
};

export const loginApi = async (input: ILoginRequest) => {
  const { email, password } = input;
  await new Promise((res, rej) => setTimeout(() => res("..."), 1000));
  if (email === "gcf@gmail.com" && password === "12345") return;
  throw new Error("invalid password");
};

export const signUpApi = async (input: ISignUpRequest) => {
  const { fullName, email, password, rePassword } = input;
  const body = {
    email,
    fullName,
    password,
    reEnterPassword: rePassword,
  };

  return;

  const response = await axios.post<IApiResponse>(
    "https://dev.onepick.info/api/v1/user-register",
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "FAIL") {
    // 비밀번호 형식 에러
    if (data.errorCode === "INCORRECT_USER_PASSWORD") {
      throw new Error(
        "password should be  between 8 and 20 characters long and include both letters and numbers",
      );
    }

    throw new Error("sign up error");
    // 비밀번호/재비밀번호 다른경우 에러
  }
};

export const pickUpRequestApi = async (input: IPickupRequest) => {
  console.log("input", input);
  return "...";
};

export const telcomRequestApi = async (input: IPickupRequest) => {
  console.log("input", input);
  return "...";
};
