import axios, { API_SERVER_ADDRESS } from "@configs/axios-config";
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
  const body = { email, password };

  const response = await axios.post<IApiResponse>(`${API_SERVER_ADDRESS}/api/v1/users/login`, body);

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 비밀번호 틀린 에러
    if (data.errorCode === "INCORRECT_USER_PASSWORD") {
      throw new Error("Invalid password");
    }

    // 존재하지 않는 회원
    if (data.errorCode === "COMMON_INVALID_PARAMETER") {
      throw new Error("User does not exists");
    }

    throw new Error("login error");
  }
};

/**
 * @description 회원가입 api
 */
export const signUpApi = async (input: ISignUpRequest) => {
  const { fullName, email, password, rePassword } = input;
  const body = {
    email,
    fullName,
    password,
    reEnterPassword: rePassword,
  };

  const response = await axios.post<IApiResponse>(`${API_SERVER_ADDRESS}/v1/user-register`, body);

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 비밀번호 형식 에러
    if (data.errorCode === "INCORRECT_USER_PASSWORD") {
      throw new Error(
        "password should be  between 8 and 20 characters long and include both letters and numbers",
      );
    }

    // 이미 존재하는 회원인 경우 에러
    if (data.errorCode === "COMMON_INVALID_PARAMETER") {
      throw new Error("Email already exists");
    }

    throw new Error("sign up error");
    // 비밀번호/재비밀번호 다른경우 에러
  }
};

export const pickUpRequestApi = async (input: IPickupRequest | any) => {
  // const { fullName, email, password, rePassword } = input;
  const body = {
    userId: 1,
    year: 2023,
    month: 4,
    day: 24,
    hour: 5,
    minute: 30,
    departure: "NewYork",
    arrival: "Seoul",
    flightNumber: "A542",
  };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/pickups/request`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;
  return "...";
};

export const telcomRequestApi = async (input: IPickupRequest) => {
  console.log("input", input);
  return "...";
};
