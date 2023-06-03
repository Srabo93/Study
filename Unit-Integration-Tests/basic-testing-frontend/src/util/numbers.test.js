import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers.js";

describe("transformToNumber()", () => {
  it("should transform string to number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should throw an error if number not provided as sting", () => {
    const input = "string";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });

  describe("cleanNumbers()", () => {
    it("should return an array ov number values if an array of string values is provided", () => {
      const numberValues = ["1", "2"];
      const cleanedNumbers = cleanNumbers(numberValues);

      expect(cleanedNumbers[0]).toBeTypeOf("number");
    });

    it("should throw an error if an array with empty strings provided", () => {
      const numberValues = ["", 1];

      const cleanFn = () => cleanNumbers(numberValues);

      expect(cleanFn).toThrow();
    });
  });
});
