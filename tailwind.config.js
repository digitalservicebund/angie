/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/pages/**/*"],
  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
  theme: {
    extend: {},
  },
  plugins: [require("./src")],
};
