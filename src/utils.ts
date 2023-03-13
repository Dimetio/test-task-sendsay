import { MAX_SYMBOLS } from "./constants";

export const correctResult = (value: number) => {
  const result = value.toString().split(".").join(",");

  if (result.length > MAX_SYMBOLS) {
    return result.substring(0, MAX_SYMBOLS);
  }

  return result;
};
