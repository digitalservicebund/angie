# frontend-playground (angie?)

pre-pre-alpha. This is just a starting point!

Standing on the shoulders of GDS giants: [Building a resilient frontend using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)


## Angie

### A stylesheet

Based on CSS because

> “This declarative language will gracefully continue on failure, allow you to write global and scoped code, and it will work across your entire front-end stack, wether it’s rendered by a framework, a CMS or a static HTML file”

source: [CSS doesn't suck](https://archive.hankchizljaw.com/wrote/css-doesnt-suck/)

CSS methodology: something similar to [Cube CSS](https://cube.fyi/#what-does-cube-css-stand-for), especially

* embrace the nature of CSS (cascade, global scope) not working against it
* liberal use of element selectors

### A JavaScript file

Goal: JavaScript functionality is always optional, always an enhancement

So it is okay, to not support all browsers. So it is okay, to use Custom Elements, which have a very nice lifecycle behavior: it doesn't matter what comes first: script or element. The browser takes care of it.



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

> A website built following the philosophy of progressive enhancement will be usable by anyone on any device, using any browser.

> Progressive enhancement isn’t about browsers or devices or technologies. It’s about crafting experiences that serve your users by giving them access to content without technological restrictions. Progressive enhancement doesn’t require that you provide the same experience to every user, nor does it preclude you from using the latest and greatest technologies; it simply asks that you honor your site’s purpose and respect your users by applying technologies in an intelligent way, layer upon layer, to craft an amazing experience.

Source: Aaron Gustafson - Adaptive Web Design

### Low dependencies

* the documentation depends on [11ty](https://www.11ty.dev/docs/), which is quite flexible and works with multiple template languages
* for css composition Sass is used
* js is currently just concatenated

We will probably introduce a few more tools, but nothing which would dictate us certains things, e.g.

* browser support

### Use proven technology

> Prefer technology that’s well understood, with failure modes that are known.

[Choose Boring Technology](https://boringtechnology.club/)

Also: [Life is too short to depend on unstable software](https://blog.sidebits.tech/life-is-too-short-to-depend-on-unstable-software/)

### Future-friendly

(future-proof is impossible)

> The best way to be future-friendly is to be backwards-compatible.

[Resilient Web Design](https://resilientwebdesign.com/)

> Progressive enhancement is inherently future friendly.

Source: Aaron Gustafson - Adaptive Web Design p.17

### Software is risk/cost

So keep it small.

### Avoid cargo cult

### Worse is better

> It is far better to have an underfeatured product that is rock solid, fast, and small than one that covers what an expert would consider the complete requirements.

[Wikipedia](https://en.wikipedia.org/wiki/Worse_is_better)

### Bottom up

Start small and maybe stupid and grow from there. Don't get carried away by all the polished boilerplates and starter kits. Learn from them and take only what is useful for us.


