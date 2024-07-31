module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    browser: true, // Include if you're running in a browser environment
    node: true // Include if you're running in a Node.js environment
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "no-console": "off",
    "no-undef": "error",
    quotes: ["error", "double"],
    "max-params": ["error", 5],
    "react/react-in-jsx-scope": "off",
    semi: "off",
    "multiline-ternary": "off"
  },
  globals: {
    console: "readonly",
    localStorage: "readonly",
    module: "readonly" // Add this line if needed
  }
}
