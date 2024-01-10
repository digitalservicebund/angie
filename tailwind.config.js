/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/pages/**/*", "./.storybook/blocks/*"],
  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
  theme: {
    extend: {},
  },
  plugins: [require("./src")],
};
