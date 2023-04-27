# Angie

[![version](https://img.shields.io/npm/v/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)
[![npm downloads](https://img.shields.io/npm/dw/@digitalservice4germany/angie)](https://www.npmjs.com/package/@digitalservice4germany/angie)

CSS framework for products which use the DigitalService design system "Angie".

## Installation

```sh
npm install @digitalservice4germany/angie
```

### Import stylesheet(s) in your app

Depends on your app setup. Code from a Remix app as an example:

```js
import fontsStylesheet from "@digitalservice4germany/angie/fonts.css";
import angieStylesheet from "@digitalservice4germany/angie/angie.css";
…
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: fontsStylesheet },
  { rel: "stylesheet", href: angieStylesheet },
];
```

### Disable Tailwind preflight (only when using Tailwind)

Preflight is a set of base styles for Tailwind projects. They conflict with the Angie base styles.

Add the following to your `tailwind.config.js`:

```js
module.exports = {
  …
  corePlugins: {
    preflight: false,
  },
  …
}
```

Warning when adding Angie to an existing product: This might break your styles when you relied on the Tailwind base styles before.

## Documentation (styleguide)

- source code in the `/docs` folder
- find the [current version](https://digitalservicebund.github.io/angie/) online

## Contributing

You want to contribute? Welcome. Please read the [CONTRIBUTING](CONTRIBUTING.md) guide.

tldr; `npm install && npm start`

## More

- [PHILOSOPHY](PHILOSOPHY.md)
