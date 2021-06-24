module.exports = {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "tsconfig.json",
    },
  },
};
