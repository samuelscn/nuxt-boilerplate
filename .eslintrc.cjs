module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:vue/vue3-essential",
    "@nuxtjs/eslint-config-typescript",
    'plugin:prettier/recommended'
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": '@typescript-eslint/parser',
    "extraFileExtensions": [".vue"]
  },
  "plugins": [
    "vue",
    "vitest"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "indent": ["error", 2],
    "comma-spacing": ["error", { "before": true, "after": true }],
  }
}
