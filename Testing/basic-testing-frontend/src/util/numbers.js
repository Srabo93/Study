import { validateStringNotEmpty } from "./validation.js";
import { validateNumber } from "./validation.js";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberValue of numberValues) {
    validateStringNotEmpty(numberValue);
    const number = transformToNumber(numberValue);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
