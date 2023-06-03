import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation.js";

describe("validateStringNotEmpty", () => {
  it("should validate a string is not empty", () => {
    const input = "";

    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error for arguments that != string", () => {
    const inputs = [[], 1, {}, true];

    const resultFn = () => validateStringNotEmpty(inputs[0]);
    const resultFn2 = () => validateStringNotEmpty(inputs[1]);
    const resultFn3 = () => validateStringNotEmpty(inputs[2]);
    const resultFn4 = () => validateStringNotEmpty(inputs[3]);

    expect(resultFn).toThrow();
    expect(resultFn2).toThrow();
    expect(resultFn3).toThrow();
    expect(resultFn4).toThrow();
  });

  describe("validateNumber())", () => {
    it("should validate number", () => {
      const input = 2;

      const resultFn = () => validateNumber(input);

      expect(resultFn).not.toThrow();
    });

    it("should throw an error for arguments != number", () => {
      const inputs = ["", true, {}, []];

      const resultFn = () => validateNumber(inputs[0]);
      const resultFn2 = () => validateNumber(inputs[1]);
      const resultFn3 = () => validateNumber(inputs[2]);
      const resultFn4 = () => validateNumber(inputs[3]);

      expect(resultFn).toThrow();
      expect(resultFn2).toThrow();
      expect(resultFn3).toThrow();
      expect(resultFn4).toThrow();
    });
  });
});
