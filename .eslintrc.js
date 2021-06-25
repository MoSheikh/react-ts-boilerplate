module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/semi": "off",
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off"
      }
    }
  ]
};
