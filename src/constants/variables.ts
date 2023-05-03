export const SELECT_DEFAULT_TEXT = "-";
export const SELECT_YEAR_DEFAULT_TEXT = "-";
export const SELECT_MONTH_DEFAULT_TEXT = "-";
export const SELECT_DATE_DEFAULT_TEXT = "-";
export const SELECT_HOUR_DEFAULT_TEXT = "-";
export const SELECT_MINUTE_DEFAULT_TEXT = "-";

// pickup service 출발/도착지 장소
export enum EPICKUP_PLACE {
  IA = "Incheon airport",
  GCF = "GCF",
  OH = "Oakwood Hotel",
  IGC = "Incheon Global Campus",
}

export const DEPARTURE_PLACES = [
  SELECT_DEFAULT_TEXT,
  EPICKUP_PLACE.IA,
  EPICKUP_PLACE.GCF,
  EPICKUP_PLACE.OH,
  EPICKUP_PLACE.IGC,
];
export const ARRIVAL_PLACES = [
  SELECT_DEFAULT_TEXT,
  EPICKUP_PLACE.IA,
  EPICKUP_PLACE.GCF,
  EPICKUP_PLACE.OH,
  EPICKUP_PLACE.IGC,
];

// move service 출발/도착지 국가 목록
export const DEPARTURE_NATIONS = [SELECT_DEFAULT_TEXT, "Korea", "USA"];
export const ARRIVAL_NATIONS = [SELECT_DEFAULT_TEXT, "Korea", "USA"];

// car service 가격범위 (dollar 단위)
const STEP = 5000;
const MAX_PRICE = 100000;
const MIN_PRICES: number[] = [];
const MAX_PRICES: number[] = [];

const N = Math.floor(MAX_PRICE / STEP);

for (let i = 0; i < N; i++) {
  MIN_PRICES.push(STEP * i);
}

for (let i = 1; i < N + 1; i++) {
  MAX_PRICES.push(STEP * i);
}

export { MIN_PRICES, MAX_PRICES };
