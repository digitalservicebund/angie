---
tags: [component]
title: Button
layout: layouts/sidebar.njk
---

# Button

## Development notes

- add `ds-button` as base class to a `button` or link (primary, medium)
- combine with one size modifier: `ds-button-small` or `ds-button-large`
- combine with one appearance modifier: `ds-button-secondary`, `ds-button-tertiary`, `ds-button-ghost`
- for full width add `ds-button-full-width`

### Button with icon

- use `svg` for the icon, add `ds-button-icon` class to the icon
- add `ds-button-with-icon` class
- wrap text in a `span` with the class `ds-button-label`

#### Button with icon only (avoid!)

- add `ds-button-with-icon-only` class
- wrap (invisible) text in a `span` with class `sr-only`

### Links that look like buttons

- add `role="button"` to the link

#### Disabled links

- use a `div` as tag and add `is-disabled` class

### Code examples

#### Secondary & small

```
<button class="ds-button ds-button-secondary ds-button-small">
    <span class="ds-button-label">Registrieren</span>
</button>
```

#### With icon

```
<button class="ds-button ds-button-with-icon">
    <svg class="ds-button-icon">...</svg>
    <span class="ds-button-label">Registrieren</span>
</button>
```

#### With icon only

```
<button class="ds-button ds-button-with-icon ds-button-with-icon-only">
    <span class="sr-only">Registrieren</span>
    <svg class="ds-button-icon">...</svg>
</button>
```

#### Link

```
<a href="..." role="button" class="ds-button ds-button-ghost">Registrieren</a>
```

## Primary button (default)

### Large

<div class="ds-stack-24">
  <div>
    <button class="ds-button ds-button-large"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Medium (default)

<div class="ds-stack-16">
  <div>
    <button class="ds-button"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Small

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-small"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Disabled

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-large" disabled><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon" disabled>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon ds-button-with-icon-only" disabled>
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Full width

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-large ds-button-full-width"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon ds-button-full-width">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon ds-button-full-width">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Long text (edge case)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</button>
  </div>
  <div>
    <button class="ds-button ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-small ds-button-with-icon">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

## Secondary button

### Large

<div class="ds-stack-24">
  <div>
    <button class="ds-button ds-button-secondary ds-button-large"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-large ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-large ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Medium (default)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-secondary"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Small

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-secondary ds-button-small"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Disabled

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-secondary ds-button-large" disabled><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon" disabled>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon ds-button-with-icon-only" disabled>
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Full width

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-secondary ds-button-large ds-button-full-width"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon ds-button-full-width">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon ds-button-full-width">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Long text (edge case)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-secondary ds-button-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-secondary ds-button-small ds-button-with-icon">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

## Tertiary button

### Large

<div class="ds-stack-24">
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Medium (default)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-tertiary"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Small

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Disabled

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large" disabled><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon" disabled>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon ds-button-with-icon-only" disabled>
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Full width

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large ds-button-full-width"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon ds-button-full-width">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon ds-button-full-width">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Long text (edge case)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-tertiary ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

## Ghost button

### Large

<div class="ds-stack-24">
  <div>
    <button class="ds-button ds-button-ghost ds-button-large"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-large ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-large ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Medium (default)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-ghost"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Small

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-ghost ds-button-small"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon ds-button-with-icon-only">
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Disabled

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-ghost ds-button-large" disabled><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon" disabled>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon ds-button-with-icon-only" disabled>
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Full width

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-ghost ds-button-large ds-button-full-width"><span class="ds-button-label">Registrieren</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon ds-button-full-width">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon ds-button-full-width">
        <span class="ds-button-label">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

### Long text (edge case)

<div class="ds-stack-16">
  <div>
    <button class="ds-button ds-button-ghost ds-button-large"><span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-large ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </button>
  </div>
  <div>
    <button class="ds-button ds-button-ghost ds-button-small ds-button-with-icon">
        <span class="ds-button-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </button>
  </div>
</div>

## Special cases

### Input type submit (use `<button>` where possible)

<div class="ds-stack-16">
  <div>
    <input type="submit" class="ds-button ds-button-tertiary ds-button-large" value="Registrieren" />
  </div>
  <div>
    <input type="submit" class="ds-button ds-button-secondary" value="Registrieren" />
  </div>
  <div>
    <input type="submit" class="ds-button ds-button-small ds-button-full-width" value="Registrieren" />
  </div>
</div>

### Link

<div class="ds-stack-16">
  <div>
    <a href="https://digitalservice.bund.de" role="button" class="ds-button ds-button-primary ds-button-with-icon">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </a>
  </div>
  <div>
    <a href="https://digitalservice.bund.de" role="button" class="ds-button ds-button-ghost ds-button-small ds-button-with-icon ds-button-with-icon-only" disabled>
        <span class="sr-only">Registrieren</span>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
    </a>
  </div>
  <div>
    <a href="https://digitalservice.bund.de" role="button" class="ds-button ds-button-secondary ds-button-with-icon ds-button-full-width">
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </a>
  </div>
  <div>
    <div class="ds-button ds-button-secondary ds-button-with-icon is-disabled" role="button" aria-disabled>
        <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" />
        </svg>
        <span class="ds-button-label">Registrieren</span>
    </a>
  </div>
</div>

## Further resources

- [MDN: The HTML Button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [GOV.UK Design System - Components - Button](https://design-system.service.gov.uk/components/button/)
- [Accessible Icon (only) Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
- [Discussion on links styled as buttons, a11y implications](https://github.com/alphagov/govuk_elements/pull/272)
