import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors.js";

describe("class HttpError", () => {
  it("should contain the provided properties", () => {
    const statusCode = 200;
    const message = "Test";
    const data = { key: "value" };

    const testError = new HttpError(statusCode, message, data);

    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBe(data);
  });

  it("should return undefined data if not provided", () => {
    const statusCode = 200;
    const message = "Test";

    const testError = new HttpError(statusCode, message);

    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBeUndefined();
  });

  it("should return undefined statusCode if not provided", () => {
    const message = "Test";
    const data = { key: "value" };

    const testError = new HttpError(undefined, message, data);

    expect(testError.data).toBe(data);
    expect(testError.message).toBe(message);
    expect(testError.statusCode).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the message property if provided", () => {
    const message = "string";

    const testValidationError = new ValidationError(message);

    expect(testValidationError.message).toBe(message);
  });

  it("should contain message undefined if not provided", () => {
    const testValidationError = new ValidationError(undefined);
    expect(testValidationError.message).toBeUndefined();
  });
});
