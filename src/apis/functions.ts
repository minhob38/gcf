import axios, { API_SERVER_ADDRESS } from "@configs/axios-config";
import { convertEnglishToNumberMonth, convertTelcomServiceInputToApiRequest } from "@utils/common";
import { QueryFunctionContext, QueryKey } from "react-query";
import {
  IPickupRequest,
  ILoginRequest,
  ISignUpRequest,
  IApiResponse,
  ITelcomRequest,
  IMoveRequest,
  IFindMyPickup,
} from "types/types";

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
  const body: { email: string; password: string } = { email, password };

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
  const body: {
    email: string;
    fullName: string;
    password: string;
    reEnterPassword: string;
  } = {
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

/**
 * @description pickup 요청 api
 */
export const pickUpRequestApi = async (input: IPickupRequest) => {
  const { year, month, date, hour, minute, departure, arrival, flightNumber } = input;
  const body: {
    userId: number;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    departure: string;
    arrival: string;
    flightNumber: string;
  } = {
    userId: 1,
    year: parseInt(year),
    month: convertEnglishToNumberMonth(month),
    day: parseInt(date),
    hour: parseInt(hour),
    minute: parseInt(minute),
    departure,
    arrival,
    flightNumber,
  };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/pickups/request`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 입력데이터가 없을때
    if (data.errorCode === "COMMON_INVALID_PARAMETER") {
      throw new Error("enter pickup schedule form");
    }

    throw new Error("pick up error");
  }
};

/**
 * @description 통신서비스 요청 api
 */
export const telcomRequestApi = async (input: ITelcomRequest) => {
  const { year, month, kind } = input;
  const body: {
    userId: number;
    year: number;
    month: number;
    arrApplyTelecommunicationTypeStr: string;
  } = {
    userId: 1,
    year: parseInt(year),
    month: convertEnglishToNumberMonth(month),
    arrApplyTelecommunicationTypeStr: convertTelcomServiceInputToApiRequest(kind),
  };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/telecommunications/request`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 입력데이터가 없을때
    if (data.errorCode === "COMMON_INVALID_PARAMETER") {
      throw new Error("enter telecommunication schedule form");
    }

    throw new Error("telcom error");
  }
};

/**
 * @description 이사 서비스 요청 api
 */
export const moveRequestApi = async (input: IMoveRequest) => {
  const { year, month } = input;
  const body: {
    userId: number;
    year: number;
    month: number;
    day: number;
    nation: string;
    address: string;
  } = {
    userId: 1,
    year: 2023,
    month: 4,
    day: 24,
    nation: "korea",
    address: "myhome",
  };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/moves/request`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 입력데이터가 없을때
    if (data.errorCode === "COMMON_INVALID_PARAMETER") {
      throw new Error("enter move schedule form");
    }

    throw new Error("move error");
  }
};

/**
 * @description 나의 pickup 조회 api
 */
export const findMyPickupApi = async ({ queryKey }) => {
  console.log(queryKey);
  console.log(queryKey.queryKey);
  const [key, userId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/pickups/${userId}/retrieve`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const res = data.data as unknown as {
      applyStatus: string;
      arrival: string;
      day: number;
      departure: string;
      flightNumber: string;
      hour: number;
      minute: number;
      month: number;
      userId: number;
      year: number;
    };

    return {
      applyStatus: res.applyStatus,
      arrival: res.arrival,
      date: res.day,
      departure: res.departure,
      flightNumber: res.flightNumber,
      hour: res.hour,
      minute: res.minute,
      month: res.month,
      year: res.year,
    };
  }

  if (data.result === "FAIL") {
    throw new Error("find my pickup booking error");
  }
};
