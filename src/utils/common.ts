/**
 * @description email인지 형식체크
 */
export const checkIsEmailFormat = (email: string): boolean => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isEmailFormat = re.test(email);
  return isEmailFormat;
};
