import { EENGLISH_MONTH } from "types/enum";

/**
 * @description email인지 형식체크
 */
export const checkIsEmailFormat = (email: string): boolean => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isEmailFormat = re.test(email);
  return isEmailFormat;
};

/**
 * @description email인지 형식체크
 */
export const convertEnglishToNumberMonth = (englishMonth: string): number => {
  switch (englishMonth) {
    case EENGLISH_MONTH.JAN:
      return 1;
    case EENGLISH_MONTH.FEB:
      return 2;
    case EENGLISH_MONTH.MAR:
      return 3;
    case EENGLISH_MONTH.APR:
      return 4;
    case EENGLISH_MONTH.MAY:
      return 5;
    case EENGLISH_MONTH.JUN:
      return 6;
    case EENGLISH_MONTH.JUL:
      return 7;
    case EENGLISH_MONTH.AUG:
      return 8;
    case EENGLISH_MONTH.SEP:
      return 9;
    case EENGLISH_MONTH.OCT:
      return 10;
    case EENGLISH_MONTH.NOV:
      return 11;
    case EENGLISH_MONTH.DEC:
      return 12;
    default:
      return 0;
  }
};
