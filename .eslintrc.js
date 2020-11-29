module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-multi-spaces": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "never"],
    "function-paren-newline": ["error", "multiline"]
  }
};
