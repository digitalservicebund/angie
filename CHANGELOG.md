# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

...

## [0.0.4] - 2023-05-17

### Fixed

- No border on input fields in Safari

### Changed

- Button: Icon and label now need a class. This makes the CSS more flexible for different markup (e.g. no svg icon).

## [0.0.3] - 2023-05-07

### Added

- Tailwind

### Changed

Angie transitions from a standalone CSS Framework to a Tailwind plugin. All our products so far use Tailwind and this step has a few advantages:

- Angie does no longer bring its own base styles. Instead Tailwind's base styles (preflight) are used.
- Angie components use the Tailwind theme system instead of having a parallel token system with css variables. Changes to the Tailwind theme are reflected in the components. No parallel worlds.
- Angie components can use Tailwind to offer dynamic utility styles. Example: `ds-stack` component. As usual in Tailwind you can specify the margin like so `ds-stack-16` or `ds-stack-[123px]`.
- Angie components are processed by Tailwind's JIT engine. Components not used in a product, are not included in the product's stylesheet. This will become even more important when Angie grows up.

### Removed

- Angie no longer styles class-less elements. You always have to add a `ds-` class, e.g. `ds-input`.
- angie.css (breaking!)
- support for non-Tailwind products

## [0.2.0] - 2023-04-27

### Added

- Input prefix and suffix
- Link typo styles
- Base styles

## [0.1.1] - 2023-04-11

### Added

- Display regular typos as regular, even with bold user agent styles

## [0.1.0] - 2023-04-11

### Added

- Typo styles (headlines, body text, labels)

## [0.0.2] - 2023-04-04

### Added

- Published as npm package

[Unreleased]: https://github.com/digitalservicebund/angie/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/digitalservicebund/angie/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/digitalservicebund/angie/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/digitalservicebund/angie/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/digitalservicebund/angie/compare/v0.0.2...v0.1.0
