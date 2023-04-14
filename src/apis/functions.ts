import axios from "@configs/axios-config";
import { IPickupRequest, ILoginRequest, ISignUpRequest } from "types/types";

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
  console.log("signup", input);
  throw new Error("signup error");
  return "...";
};

export const pickUpRequestApi = async (input: IPickupRequest) => {
  console.log("input", input);
  return "...";
};

export const telcomRequestApi = async (input: IPickupRequest) => {
  console.log("input", input);
  return "...";
};
