import { ETELCOM_KIND_TYPE } from "./enum";

export interface IButtonProps {
  /** button label(typescript type)입니다. */
  label: string;
}

export interface IApiResponse {
  data: string;
  errorCode: string;
  message: string;
  result: "SUCCESS" | "FAIL";
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  fullName: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface IPickupRequest {
  arrival: string;
  date: string;
  departure: string;
  flightNumber: string;
  hour: string;
  minute: string;
  month: string;
  year: string;
}
// <e.g>
// arrival: "GCF";
// date: "9";
// departure: "Incheon Airport";
// flightNumber: "123";
// hour: "10";
// minute: "30";
// month: "Jun";
// year: "2024";

export interface ITelcomRequest {
  kind: ETELCOM_KIND_TYPE[];
  month: string;
  year: string;
}
// <e.g>
// kind: ["internet", "mobile"];
// month: "Apr";
// year: "2024";

export interface IMoveRequest {
  userId: number;
  year: string;
  month: string;
  date: string;
  departureNation: string;
  departureAddress: string;
  arrivalNation: string;
  arrivalAddress: string;
}
// <e.g>
// kind: ["internet", "mobile"];
// month: "Apr";
// year: "2024";

export interface IPickupCancel {
  pickUpId: number;
}

export interface ITelcomCancel {
  telcomId: number;
}

export interface IMoveCancel {
  moveId: number;
}
