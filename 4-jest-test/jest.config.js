/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  // testMatch: ["**/*.test.ts"],
  testMatch: ["**/htmlEscape.test.ts"],
};
