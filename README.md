# Angie Design System

[![version](https://img.shields.io/npm/v/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)
[![npm downloads](https://img.shields.io/npm/dw/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

Tailwind plugin for products which use the DigitalService design system "Angie".

## Installation

```sh
npm install @digitalservice4germany/angie
```

### Add plugin to your Tailwind config

```js
module.exports = {
  content: [...],
  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
  theme: {
    extend: {},
  },
  plugins: [require("@digitalservice4germany/angie")],
};
```

## Documentation (styleguide)

Find the [current version](https://digitalservicebund.github.io/angie/) online.

## Contributing

We are using [conventional commits](https://www.conventionalcommits.org/).

tldr; `npm install && npm start`
