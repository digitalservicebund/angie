---
tags: [component]
title: Button
layout: layouts/sidebar.njk
---

# Button

- add `ds-button` as base class to a `button` or link (primary, medium)
- combine with one size modifier: `ds-button-small` or `ds-button-large`
- combine with one appearance modifier: `ds-button-secondary`, `ds-button-tertiary`, `ds-button-ghost`
- for full width add `ds-button-full-width`

## Button with icon

- use `svg` for the icon
- add `ds-button-with-icon` class
- wrap text in a `span`

## Examples

<div class="ds-stack" style="--stack-space: var(--s-l)">
  <div>
    <button>Lorem ipsum</button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon"><svg style="background-color: red"></svg><span>Lorem ipsum (with icon)</span></button>
  </div>
  <div>
    <button class="ds-button" disabled>Lorem ipsum</button>
  </div>
  <div>
    <a href="#" class="ds-button">Lorem ipsum (link)</a>
  </div>
  <div>
    <button class="ds-button ds-button-full-width">Lorem ipsum (full width)</button>
  </div>
  <div>
    <button class="ds-button ds-button-full-width ds-button-with-icon"><span>Lorem ipsum (with icon)</span>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
</svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon">
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
</svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-large">Lorem ipsum (large)</button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon"><span>Lorem ipsum (with icon)</span><svg style="background-color: red"></svg></button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon">
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
</svg>
    <span class="sr-only">Close</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><svg style="background-color: red"></svg></button>
  </div>
  <div>
    <button class="ds-button ds-button-small">Lorem ipsum (small)</button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary">Lorem ipsum (secondary)</button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary" disabled>Lorem ipsum (secondary)</button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary">Lorem ipsum (tertiary)</button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary" disabled>Lorem ipsum (tertiary)</button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost">Lorem ipsum (ghost)</button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost" disabled>Lorem ipsum (ghost)</button>
  </div>
</div>

<hr />

<ul>
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
      >MDN: The HTML Button element</a
    >
  </li>
  <li>
    <a href="https://design-system.service.gov.uk/components/button/"
      >GOV.UK Design System - Components - Button</a
    >
  </li>
</ul>

- https://www.sarasoueidan.com/blog/accessible-icon-buttons/
