import axios, { API_SERVER_ADDRESS } from "@configs/axios-config";
import { convertEnglishToNumberMonth, convertTelcomServiceInputToApiRequest } from "@utils/common";
import { ECAR_SEARCH_TYPE, ESALE_STATUS } from "types/enum";
import {
  IPickupRequest,
  ILoginRequest,
  ISignUpRequest,
  IApiResponse,
  ITelcomRequest,
  IMoveRequest,
  IMoveCancel,
  IPickupCancel,
  ITelcomCancel,
  ICarSale,
  ICarRequest,
  IMyCar,
} from "types/types";

export const testGetApi = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  const { data } = response;
  await new Promise((resolve, reject) => setTimeout(() => resolve("..."), 3000));
  // throw new Error("error"); -> onError로 감 / onError로 가면 ErrorBoundary 동작
  return data;
};

export const testPostApi = async (input) => {
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
  const apiData = data.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    return { userId: apiData.userId };
  }

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

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/user-register`,
    body,
  );

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
 * @description 나의 정보 조회 api
 */
export const findMeApi = async (userId: number) => {
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/mypage/users/${userId}`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      email: string;
      fullName: string;
      phoneNumber: string;
    };

    if (!apiData) return null;

    return {
      email: apiData.email,
      fullName: apiData.fullName,
      phoneNumber: apiData.phoneNumber,
    };
  }

  if (data.result === "FAIL") {
    throw new Error("find my information  error");
  }
};

/**
 * @description pickup 요청 api
 */
export const pickUpRequestApi = async (input: IPickupRequest) => {
  const { userId, year, month, date, hour, minute, departure, arrival, flightNumber } = input;
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
    userId,
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
  const { userId, year, month, kind } = input;
  const body: {
    userId: number;
    year: number;
    month: number;
    arrApplyTelecommunicationTypeStr: string;
  } = {
    userId,
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
  const {
    userId,
    year,
    month,
    date,
    departureNation,
    departureAddress,
    arrivalNation,
    arrivalAddress,
  } = input;
  const body: {
    userId: number;
    year: number;
    month: number;
    day: number;
    departureNation: string;
    departureAddress: string;
    arrivalNation: string;
    arrivalAddress: string;
  } = {
    userId,
    year: parseInt(year),
    month: convertEnglishToNumberMonth(month),
    day: parseInt(date),
    departureNation,
    departureAddress,
    arrivalNation,
    arrivalAddress,
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
 * @description car 서비스 요청 api
 */
export const carBuyRequestApi = async (input: ICarRequest) => {
  const { userId, carBasicId } = input;
  const body: { userId: number; carBasicId: number } = { userId, carBasicId };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/car-sales/apply`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    // 입력데이터가 없을때
    if (data.errorCode === "COMMON_SYSTEM_ERROR") {
      throw new Error("enter car buy form");
    }

    throw new Error("car service error");
  }
};

/**
 * @description pickup 서비스 취소 api
 */
export const pickupCancelApi = async (input: IPickupCancel) => {
  const { pickUpId } = input;
  const body: { pickUpId: number } = { pickUpId };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/pickups/cancel`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    throw new Error("move error");
  }
};

/**
 * @description telcom 서비스 취소 api
 */
export const telcomCancelApi = async (input: ITelcomCancel) => {
  const { telcomId } = input;
  const body: { telecommunicationId: number } = { telecommunicationId: telcomId };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/telecommunications/cancel`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    throw new Error("telcom error");
  }
};

/**
 * @description move 서비스 취소 api
 */
export const moveCancelApi = async (input: IMoveCancel) => {
  const { moveId } = input;
  const body: { moveId: number } = { moveId };

  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/moves/cancel`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") return;

  if (data.result === "FAIL") {
    throw new Error("move error");
  }
};

/**
 * @description 나의 pickup 조회 api
 */
export const findMyPickupApi = async ({ queryKey }) => {
  const [key, userId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/pickups/${userId}/retrieve`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      pickUpId: number;
      applyStatus: string;
      arrival: string;
      day: number;
      departure: string;
      flightNumber: string;
      hour: number;
      minute: number;
      month: number;
      year: number;
    };

    if (!apiData) return null;

    return {
      pickUpId: apiData.pickUpId,
      applyStatus: apiData.applyStatus,
      arrival: apiData.arrival,
      date: apiData.day,
      departure: apiData.departure,
      flightNumber: apiData.flightNumber,
      hour: apiData.hour,
      minute: apiData.minute,
      month: apiData.month,
      year: apiData.year,
      status: apiData.applyStatus,
    };
  }

  if (data.result === "FAIL") {
    // if (data.errorCode === "COMMON_INVALID_PARAMETER") return null;
    throw new Error("find my pickup booking error");
  }
};

/**
 * @description 나의 telcom 조회 api
 */
export const findMyTelcomApi = async ({ queryKey }) => {
  const [key, userId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/telecommunications/${userId}/retrieve`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      telecommunicationId: number;
      year: number;
      month: number;
      applyMobilePhone: boolean;
      applyInternet: boolean;
      applyTv: boolean;
      applyStatus: string;
    };

    if (!apiData) return null;

    return {
      telecommunicationId: apiData.telecommunicationId,
      year: apiData.year,
      month: apiData.month,
      isMobilePhone: apiData.applyMobilePhone,
      isInternet: apiData.applyInternet,
      isTv: apiData.applyTv,
      status: apiData.applyStatus,
    };
  }

  if (data.result === "FAIL") {
    // if (data.errorCode === "COMMON_INVALID_PARAMETER") return null;
    throw new Error("find my pickup booking error");
  }
};

/**
 * @description 나의 move 조회 api
 */
export const findMyMoveApi = async ({ queryKey }) => {
  const [key, userId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/moves/${userId}/retrieve`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      moveId: number;
      year: number;
      month: number;
      departureNation: string;
      departureAddress: string;
      arrivalNation: string;
      arrivalAddress: string;
      applyStatus: string;
    };

    if (!apiData) return null;

    return {
      moveId: apiData.moveId,
      year: apiData.year,
      month: apiData.month,
      departureNation: apiData.departureNation,
      departureAddress: apiData.departureAddress,
      arrivalNation: apiData.arrivalNation,
      arrivalAddress: apiData.arrivalAddress,
      status: apiData.applyStatus,
    };
  }

  if (data.result === "FAIL") {
    // if (data.errorCode === "COMMON_INVALID_PARAMETER") return null;
    throw new Error("find my pickup booking error");
  }
};

/**
 * @description 구매가능한 car들 조회 api
 */
export const findCarSalesApi = async ({ queryKey }): Promise<ICarSale[]> => {
  const [key, searchType, { priceStart, priceEnd }] = queryKey;
  const body: { newAndUsed: ECAR_SEARCH_TYPE; priceStart: number; priceEnd: number } = {
    newAndUsed: searchType,
    priceStart,
    priceEnd,
  };
  const response = await axios.post<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/car-sales/available`,
    body,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      carBasicId: number;
      brandCode: string;
      brandName: string;
      carModelCode: string;
      carModelName: string;
      newAndUsed: ECAR_SEARCH_TYPE;
      generationName: string;
      fuelType: string;
      segment: string;
      bodyType: string;
      seatCount: number;
      price: number;
      carImagePath: string;
      carImageFileName: string;
      buyerUserId: number;
    }[];

    if (!apiData) return [];

    return apiData.map((data) => {
      let bodyType: string;

      switch (data.bodyType) {
        case "SEDAN":
          bodyType = "Sedan";
          break;
        case "HATCHBACK":
          bodyType = "Hatch";
          break;
        default:
          bodyType = data.bodyType;
      }

      return {
        carBasicId: data.carBasicId,
        brandCode: data.brandCode,
        brandName: data.brandName,
        carModelCode: data.carModelCode,
        carModelName: data.carModelName,
        newAndUsed: data.newAndUsed,
        generationName: data.generationName,
        fuelType: data.fuelType,
        segment: data.segment,
        bodyType,
        seatCount: data.seatCount,
        price: data.price,
        carImageUrl: data.carImagePath + data.carImageFileName,
        buyerUserId: data.buyerUserId, // ?
      };
    });
  }

  if (data.result === "FAIL") {
    throw new Error("find car sale list error");
  }

  return [];
};

/**
 * @description car 상세 조회 api
 */
export const findCarDetailApi = async ({ queryKey }) => {
  const [key, carBasicId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/car-sales/${carBasicId}`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      carBasicId: number;
      brandCode: string;
      brandName: string;
      carModelCode: string;
      carModelName: string;
      newAndUsed: ECAR_SEARCH_TYPE;
      generationName: string;
      fuelType: string;
      segment: string;
      bodyType: string;
      seatCount: number;
      price: number;
      carImagePath: string;
      carImageFileName: string;
      buyerUserId: number;
    };

    if (!apiData) return null;

    let bodyType: string;

    switch (apiData.bodyType) {
      case "SEDAN":
        bodyType = "Sedan";
        break;
      case "HATCHBACK":
        bodyType = "Hatch";
        break;
      default:
        bodyType = apiData.bodyType;
    }

    return {
      carBasicId: apiData.carBasicId,
      brandCode: apiData.brandCode,
      brandName: apiData.brandName,
      carModelCode: apiData.carModelCode,
      carModelName: apiData.carModelName,
      newAndUsed: apiData.newAndUsed,
      generationName: apiData.generationName,
      fuelType: apiData.fuelType,
      segment: apiData.segment,
      bodyType,
      seatCount: apiData.seatCount,
      price: apiData.price,
      carImageUrl: apiData.carImagePath + apiData.carImageFileName,
      buyerUserId: apiData.buyerUserId, // ?
    };
  }

  if (data.result === "FAIL") {
    throw new Error("find car detail  error");
  }
};

/**
 * @description 구매신청한 car들 조회 api
 */
export const findMyCarsApi = async ({ queryKey }): Promise<IMyCar[]> => {
  const [key, userId] = queryKey;
  const response = await axios.get<IApiResponse>(
    `${API_SERVER_ADDRESS}/api/v1/car-sales/users/${userId}`,
  );

  const data = response.data;
  const status = response.status;

  if (data.result === "SUCCESS") {
    const apiData = data.data as unknown as {
      carBasicId: number;
      brandCode: string;
      brandName: string;
      carModelCode: string;
      carModelName: string;
      newAndUsed: ECAR_SEARCH_TYPE;
      generationName: string;
      fuelType: string;
      segment: string;
      bodyType: string;
      seatCount: number;
      price: number;
      imagePath: string;
      imageFileName: string;
      buyerUserId: number;
      saleStatus: ESALE_STATUS;
    }[];

    if (!apiData) return [];

    return apiData.map((data) => {
      let bodyType: string;
      let saleStatus: string;
      let newAndUsed: string;

      switch (data.bodyType) {
        case "SEDAN":
          bodyType = "Sedan";
          break;
        case "HATCHBACK":
          bodyType = "Hatch";
          break;
        default:
          bodyType = data.bodyType;
      }

      switch (data.saleStatus) {
        case ESALE_STATUS.APPLIED:
          saleStatus = "Applied";
          break;
        case ESALE_STATUS.PREPARED:
          saleStatus = "Prepared";
          break;
        case ESALE_STATUS.DELIVERY_COMPLETE:
          saleStatus = "Completed";
          break;
        case ESALE_STATUS.WITHDRAWAL:
          saleStatus = "Canceled";
          break;
        default:
          saleStatus = data.saleStatus;
      }

      switch (data.newAndUsed) {
        case ECAR_SEARCH_TYPE.NEW:
          newAndUsed = "new car";
          break;
        case ECAR_SEARCH_TYPE.USED:
          newAndUsed = "used card";
          break;
        default:
          newAndUsed = data.newAndUsed;
      }

      return {
        carBasicId: data.carBasicId,
        brandCode: data.brandCode,
        brandName: data.brandName,
        carModelCode: data.carModelCode,
        carModelName: data.carModelName,
        newAndUsed,
        generationName: data.generationName,
        fuelType: data.fuelType,
        segment: data.segment,
        bodyType,
        seatCount: data.seatCount,
        price: data.price,
        carImageUrl: data.imagePath + data.imageFileName,
        buyerUserId: data.buyerUserId,
        saleStatus,
      };
    });
  }

  if (data.result === "FAIL") {
    throw new Error("find my cars error");
  }

  return [];
};
