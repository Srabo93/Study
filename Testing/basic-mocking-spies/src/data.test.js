import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data.js";

describe("generateReportData()", () => {
  it("should call the logger function", () => {
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
