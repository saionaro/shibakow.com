module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["import", "react"],
  globals: {
    Promise: true
  },
  rules: {
    "eol-last": [2],
    indent: ["error", 2]
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js"
      }
    }
  }
};
