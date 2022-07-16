/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/frontend/entrypoints/*.ts",
    "./app/views/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
