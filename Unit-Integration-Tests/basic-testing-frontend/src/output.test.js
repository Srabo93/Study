import { describe, expect, it } from "vitest";
import { generateOutput } from "./output.js";

describe("generateOutput()", () => {
  it("should return a string no matter the input", () => {
    const input = null;
    const input2 = "";

    const resultFn = generateOutput(input);
    const resultFn2 = generateOutput(input2);

    expect(resultFn).toBeTypeOf("string");
    expect(resultFn2).toBeTypeOf("string");
  });

  it("should return a valid result as a string", () => {
    const input = 5;

    const result = generateOutput(input);

    expect(result).toContain(result.toString());
  });

  it("should return an empty string if no-calc provided", () => {
    const input = "no-calc";

    const result = generateOutput(input);

    expect(result).toBe("");
  });

  it("should return the string 'invalid' when given as argument", () => {
    const input = "invalid";

    const result = generateOutput(input);

    expect(result).toContain("Invalid");
  });
});
