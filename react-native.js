module.exports = {
  extends: [
    "universe",
    "universe/shared/typescript-analysis",
    "plugin:react-hooks/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto",
      },
    ],
    "no-console": "error",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react-native/"],
          ["module"],
          ["/^@.*\\/__mocks__/"],
          ["/^~//", "/^@//"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  globals: {
    __dirname: true,
  },
  ignorePatterns: ["node_modules"],
};
