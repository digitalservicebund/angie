---
tags: [component, form]
title: Checkbox
layout: layouts/sidebar.njk
---

# Checkbox

## Development notes

- add `ds-checkbox` as base class to a `input[type=checkbox]` element
- combine with a size modifier: `ds-checkbox-small`
- important: `input` element must be followed by `label` element in the markup

### Code example

```
<input type="checkbox" value="yes" id="c3" class="ds-checkbox" />
<label for="c3">Lorem ipsum</label>
```

#### small

```
<input type="checkbox" value="yes" id="c3" class="ds-checkbox ds-checkbox-small" />
<label for="c3">Lorem ipsum</label>
```

#### mini

```
<input type="checkbox" value="yes" id="c3" class="ds-checkbox ds-checkbox-mini" />
<label for="c3">Lorem ipsum</label>
```

#### with error state

```
<input type="checkbox" value="yes" id="c3" class="ds-checkbox has-error" />
<label for="c3">Lorem ipsum</label>
```

#### with multiple lines

If the label text is too long to fit on one line, wrap the checkbox and label in a container (e.g. a `div` or a `span`) containing nothing else. This will prevent the label text from wrapping under the checkbox.

```
<div>
  <input type="checkbox" value="yes" id="c3" class="ds-checkbox" />
  <label for="c3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
    cursus mi, a dictum magna venenatis vitae. Nunc a sollicitudin libero. In
    a risus iaculis felis eleifend sodales. Morbi ullamcorper congue viverra.
    Aliquam ullamcorper, neque ac rutrum hendrerit, erat mauris euismod quam,
    at aliquam diam mauris et magna.
  </label>
</div>
```

Note that this uses the `has` selector, which is only available on recent versions of Chrome and Safari for now. If you need to support Firefox or older browsers, add the `flex` class to the wrapping container instead.

### Regular size (default)

<div class="ds-stack-24">
  <div>
    <input type="checkbox" value="yes" id="c0" checked class="ds-checkbox" />
    <label for="c0">Lorem ipsum 1</label>
  </div>

  <div class="flex">
    <input type="checkbox" value="yes" id="c1" class="ds-checkbox" />
    <label for="c1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
      cursus mi, a dictum magna venenatis vitae. Nunc a sollicitudin libero. In
      a risus iaculis felis eleifend sodales. Morbi ullamcorper congue viverra.
      Aliquam ullamcorper, neque ac rutrum hendrerit, erat mauris euismod quam,
      at aliquam diam mauris et magna.
    </label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="c2" disabled class="ds-checkbox" />
    <label for="c2">Lorem ipsum 3 (disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="c4" disabled checked class="ds-checkbox" />
    <label for="c4">Lorem ipsum 4 (checked, disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="c3" class="ds-checkbox has-error" />
    <label for="c3">Lorem ipsum 5 (with error)</label>
  </div>
</div>

### Small size

<div class="ds-stack-16">
  <div>
    <input type="checkbox" value="yes" id="sc0" checked class="ds-checkbox ds-checkbox-small" />
    <label for="sc0">Lorem ipsum 1</label>
  </div>

  <div class="flex">
    <input type="checkbox" value="yes" id="sc1" class="ds-checkbox ds-checkbox-small" />
    <label for="sc1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
      cursus mi, a dictum magna venenatis vitae. Nunc a sollicitudin libero. In
      a risus iaculis felis eleifend sodales. Morbi ullamcorper congue viverra.
      Aliquam ullamcorper, neque ac rutrum hendrerit, erat mauris euismod quam,
      at aliquam diam mauris et magna.
    </label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="sc2" disabled class="ds-checkbox ds-checkbox-small" />
    <label for="sc2">Lorem ipsum 3 (disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="sc4" disabled checked class="ds-checkbox ds-checkbox-small" />
    <label for="sc4">Lorem ipsum 4 (checked, disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="sc3" class="ds-checkbox ds-checkbox-small has-error" />
    <label for="sc3">Lorem ipsum 5 (with error)</label>
  </div>
</div>

### Mini size

<div class="ds-stack-16">
  <div>
    <input type="checkbox" value="yes" id="mc0" checked class="ds-checkbox ds-checkbox-mini" />
    <label for="mc0">Lorem ipsum 1</label>
  </div>

  <div class="flex">
    <input type="checkbox" value="yes" id="mc1" class="ds-checkbox ds-checkbox-mini" />
    <label for="mc1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
      cursus mi, a dictum magna venenatis vitae. Nunc a sollicitudin libero. In
      a risus iaculis felis eleifend sodales. Morbi ullamcorper congue viverra.
      Aliquam ullamcorper, neque ac rutrum hendrerit, erat mauris euismod quam,
      at aliquam diam mauris et magna.
    </label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="mc2" disabled class="ds-checkbox ds-checkbox-mini" />
    <label for="mc2">Lorem ipsum 3 (disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="mc4" disabled checked class="ds-checkbox ds-checkbox-mini" />
    <label for="mc4">Lorem ipsum 4 (checked, disabled)</label>
  </div>

  <div>
    <input type="checkbox" value="yes" id="mc3" class="ds-checkbox ds-checkbox-mini has-error" />
    <label for="mc3">Lorem ipsum 5 (with error)</label>
  </div>
</div>

## Further resources

- [MDN: The HTML Checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
- [GOV.UK Design System - Components - Checkboxes](https://design-system.service.gov.uk/components/checkboxes/)
