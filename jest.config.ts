import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
