import { describe, expect, it } from "vitest";
import { transformToNumber } from "./numbers.js";

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
});
