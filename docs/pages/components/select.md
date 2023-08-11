---
tags: [component, form]
title: Select (dropdown)
layout: layouts/sidebar.njk
---

# Select (dropdown)

## Development notes

- add `ds-select` as base class to a `select` element
- combine with a size modifier: `ds-select-medium` or `ds-select-small`
- note: `options` can't be styled

### Code example

```
<label for="s0">Lorem ipsum</label>
<select id="s0" class="ds-select">
    <option value="">Bitte auswählen</option>
    <option value="1">Option 1</option>
    <option value="2" disabled>Option 2 (disabled)</option>
    <option value="3">Option 3</option>
</select>
```

#### medium

```
<select id="s0" class="ds-select ds-select-medium">
…
```

#### small

```
<select id="s0" class="ds-select ds-select-small">
…
```

#### with error state

```
<select id="s0" class="ds-select has-error">
…
```

### Large size (default)

<div class="ds-stack-24">
  <div>
    <label for="s0">Lorem ipsum 1</label>
    <select id="s0" class="ds-select">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2" disabled>Option 2 (disabled)</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="s1">Lorem ipsum 2 with error</label>
    <select id="s1" class="ds-select has-error">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="s2">Lorem ipsum 3 disabled</label>
    <select id="s2" disabled class="ds-select">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>
</div>

### Medium size

<div class="ds-stack-24">
  <div>
    <label for="ms0">Lorem ipsum 1</label>
    <select id="ms0" class="ds-select ds-select-medium">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2" disabled>Option 2 (disabled)</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="ms1">Lorem ipsum 2 with error</label>
    <select id="ms1" class="ds-select ds-select-medium has-error">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="ms2">Lorem ipsum 3 disabled</label>
    <select id="ms2" disabled class="ds-select ds-select-medium">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>
</div>

### Small size

<div class="ds-stack-24">
  <div>
    <label for="sms0">Lorem ipsum 1</label>
    <select id="sms0" class="ds-select ds-select-small">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2" disabled>Option 2 (disabled)</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="sms1">Lorem ipsum 2 with error</label>
    <select id="sms1" class="ds-select ds-select-small has-error">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>

  <div>
    <label for="sms2">Lorem ipsum 3 disabled</label>
    <select id="sms2" disabled class="ds-select ds-select-small">
      <option value="">Bitte auswählen</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  </div>
</div>

## Further resources

- [MDN: The HTML select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [GOV.UK Design System - Components - Select](https://design-system.service.gov.uk/components/select/)
