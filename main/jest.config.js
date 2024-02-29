module.exports = {
  coverageReporters: ["text-summary", "html"],
  collectCoverageFrom: ["**/*.jsx", "!**/*.test.jsx", "!**/index.jsx"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  rootDir: "src",
  testRegex: ".*\\.test\\.jsx$",
  coverageDirectory: "../coverage",
  testEnvironment: "jsdom",
};
