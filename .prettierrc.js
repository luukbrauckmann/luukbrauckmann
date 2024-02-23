/** @type {import('prettier').Config} */
export default {
  plugins: [
    'prettier-plugin-astro', 
    'prettier-plugin-css-order', 
    'prettier-plugin-jsdoc'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}