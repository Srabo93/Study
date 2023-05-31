import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example.js";

it("should generate a token value", (done) => {
  const testEmail = "test@test.com";

  generateToken(testEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate a token value", async () => {
  const testEmail = "test@test.com";

  const token = await generateTokenPromise(testEmail);

  expect(token).toBeDefined();
});
