# Angie

[![version](https://img.shields.io/npm/v/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)
[![npm downloads](https://img.shields.io/npm/dw/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)

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

- source code in the `/docs` folder
- find the [current version](https://digitalservicebund.github.io/angie/) online

## Contributing

You want to contribute? Welcome. Please read the [CONTRIBUTING](CONTRIBUTING.md) guide.

tldr; `npm install && npm start`

## More

- [PHILOSOPHY](PHILOSOPHY.md)
