import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      semi: ["error", "always"], //Points virgules obligatoires//
      "react/jsx-uses-react": "off", //React >= 17 donc reconnaissance immédiate des éléments React off pour avoid avertissement inutiles//
      "react/jsx-uses-vars": "error", //message error si variable mal déclarée ou non utilisée//
    },
  },
];