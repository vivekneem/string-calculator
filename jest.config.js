/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
  },
};
