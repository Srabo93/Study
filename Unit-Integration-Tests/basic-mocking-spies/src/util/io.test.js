import { expect, it, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io.js";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should fire the write function", () => {
  const data = "data";
  const fileName = "filename.txt";
  writeData(data, fileName);

  expect(fs.writeFile).toBeCalledWith(fileName, data);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const data = "data";
  const fileName = "filename.txt";
  writeData(data, fileName);

  expect(writeData(data, fileName)).resolves.toBeUndefined();
});
