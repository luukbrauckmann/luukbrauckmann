/** @type {import('eslint')} */
export default {
  plugins: ["jsx-a11y"],
  extends: [
    "plugin:astro/recommended",
    "plugin:jsdoc/recommended"
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
    },
  ],
}