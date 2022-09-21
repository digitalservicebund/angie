# frontend-playground (angie?)

pre-pre-alpha. This is just a starting point!

## Setup

```
npm install
```

## Start

```
npm start
```

## Build

```
npm run build
```

## Conceptual overview

We have two distinct things here:

1. the css and js code in the `src` directory
2. the `docs` directory with html pages where we in include the css and js code

The css and js code can be compiled via `npm run build` to:

* `dist/angie.css`
* `dist/angie.js`

For now these two files are the distributables – the files that can be used in other projects.

The `docs` directory contains the source code of the documentation – pages where the css and js code is used in actual html examples. It is compiled into the `_site` directory (via `npm run build`).

The documentation is not distributed, but hosted somewhere as a reference. Let's see if we also distribute html snippets in the future.

This is all just a starting point. Some things will change over time.

## Some principles

### Progressive Enhancement / layered approach

> Progressive enhancement isn’t about browsers or devices or technologies. It’s about crafting experiences that serve your users by giving them access to content without technological restrictions. Progressive enhancement doesn’t require that you provide the same experience to every user, nor does it preclude you from using the latest and greatest technologies; it simply asks that you honor your site’s purpose and respect your users by applying technologies in an intelligent way, layer upon layer, to craft an amazing experience.

Source: Aaron Gustafson - Adaptive Web Design

### Low dependencies

* the documentation depends on [11ty](https://www.11ty.dev/docs/), which is quite flexible and works with multiple template languages
* for css composition Sass is used
* js is currently just concatenated

We will probably introduce a few more tools, but nothing which would dictate us certains things, e.g.

* browser support

### long-term / future-friendly / Boring tech

* this should last at least 10 years, probably longer
* only well-understood tech should be used

### Less functionality is better

Simplicity, correctness and consistency are more important than completeness. Better have a small library that does its thing very well instead of having a large buggy one. [Wikipedia](https://en.wikipedia.org/wiki/Worse_is_better)

### Bottom up

Start small and maybe stupid and grow from there. Don't get carried away by all the polished boilerplates and starter kits. Learn from them and take only what is useful for us.


