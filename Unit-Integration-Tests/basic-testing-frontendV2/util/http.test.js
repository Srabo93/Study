import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http.js";
import { HttpError } from "./errors.js";

const testResponseData = { testkey: "testdata" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = { testkey: "testdata" };
  expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "value" };
  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("Not a string");
});

it("should throw an HttpError in case of non-ok responses", () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      if (typeof options.body !== "string") {
        return reject("Not a string");
      }
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });
  const testData = { testkey: "testdata" };

  expect(sendDataRequest(testData)).rejects.instanceOf(HttpError);
});
