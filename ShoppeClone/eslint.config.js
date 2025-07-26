import path from "path";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      import: eslintPluginImport,
      "jsx-a11y": eslintPluginJsxA11y,
      "@typescript-eslint": eslintPluginTs,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          paths: [path.resolve()],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "warn",
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          semi: false,
          trailingComma: "none",
          tabWidth: 2,
          endOfLine: "auto",
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
  {
    ignores: ["node_modules", "dist", "build"],
  },
];
