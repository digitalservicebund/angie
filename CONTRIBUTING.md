# How to contribute

There are two areas to contribute to.

1. the documentation (styleguide, presentation of example components)
2. the components (the code which is used by other projects)

The initial setup is identical.

## Setup

- install Node.js
- clone the repo to your local computer
- open a command-line (CLI) and change to the code directory
- run `npm install` in the CLI
- run `npm start` to start a development server
- open `http://localhost:8080` in your browser

## Contribute to the documentation

Most of the time you will work in the `/docs` folder only. Occasionally you might als edit files in the `/data` directory.

The most interesting folders are:

1. `/docs/pages`, the actual pages
2. `/docs/styles`, css code for the documentation only
3. `/docs/images`, add images here and reference them in the code like this `/images/<your-file.png>`

Pages are mostly "just html". From the `.njk` file ending you can see that we are using the [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html) for extra possibilities. On extra are macros.

### Macros

Allow you to define reusable chunks of content.

- are defined in `/docs/pages/_includes/macros.njk`
- example: look at the color definitions in `/docs/pages/styleguide/colors.njk`
- to use macros in a page, add `{% import "macros.njk" as macros %}` near the beginning of the page

## Contribute to the components

Most of the time you will work in the `/src` folder.

## Build process

What is `npm start` doing.

### 3 stages

1. 11ty before build: distributables are created from the `src` folder
2. 11ty (regular) build: doc pages and doc assets are compiled from the `docs` folder
3. 11ty after build: distributables from stage 1 are copied over to the `_site` folder to make them available in the docs

```mermaid
flowchart TD
    A["/data"] --> B["/src"]
    A --> D["/docs"]
    B -->|<b>1.</b> 11ty before build| C["/dist"]
    D -->|<b>2.</b> 11ty build| S["/_site"]
    C -->|<b>3.</b> 11ty after build| S
    S -->|GitHub Action| G(GitHub Pages)
    C -->|manual copy| P(external projects, e.g. A2J)
```
