import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation.js";

describe("validateNotEmpty()", () => {
  it("should not throw an error with valid arguments ", () => {
    const text = "string";
    const errorMessage = "otherstring";

    const resultFn = () => validateNotEmpty(text, errorMessage);

    expect(resultFn).not.toThrow();
  });

  it("should throw validation errorMessage if empty text string provided", () => {
    const errorMessage = "errorMessage";
    const resultFn = () => validateNotEmpty("", errorMessage);
    expect(resultFn).toThrow(errorMessage);
  });

  it("should throw validation errorMessage if no text provided", () => {
    const errorMessage = "errorMessage";
    const resultFn = () => validateNotEmpty(null, errorMessage);
    expect(resultFn).toThrow(errorMessage);
  });

  it("should throw message undefined when no arguments passed", () => {
    const resultFn = () => validateNotEmpty(null, null);
    expect(resultFn).toThrow();
  });
});
