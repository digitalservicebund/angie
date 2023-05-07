const a11y = require("../utils/a11y");

module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-radio": a11y.srOnly,
    ".ds-radio + label, .ds-radio + label::before, .ds-radio + label::after": {
      "--radio-ring-radius": "1.25rem",
      "--radio-ring-diameter": "calc(var(--radio-ring-radius) * 2)",
      "--radio-dot-radius": "0.75rem",
      "--radio-text-padding-left": "1rem",
      "--radio-text-padding-top": "0.4375rem",
    },
    ".ds-radio + label": {
      position: "relative",
      display: "inline-block",
      paddingTop: "var(--radio-text-padding-top)",
      paddingLeft:
        "calc(var(--radio-ring-diameter) + var(--radio-text-padding-left))",
      minHeight: "var(--radio-ring-diameter)",
      touchAction: "manipulation",
      cursor: "pointer",
    },
    ".ds-radio + label::before, .ds-radio + label::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "var(--radio-ring-radius)",
      left: "0",
      transform: "translateY(-50%)",
    },
    ".ds-radio + label::before": {
      left: "0",
      width: "var(--radio-ring-diameter)",
      height: "var(--radio-ring-diameter)",
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
      borderRadius: "50%",
    },
    ".ds-radio:focus + label::before, .ds-radio:focus-visible + label::before":
      {
        boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
      },
    ".ds-radio:checked + label::after": {
      left: "calc(var(--radio-ring-radius) - var(--radio-dot-radius))",
      width: "0",
      height: "0",
      border: `solid var(--radio-dot-radius) ${theme("colors.blue.800")}`,
      backgroundColor: theme("colors.blue.800"),
      borderRadius: "50%",
    },
    ".ds-radio[disabled] + label": {
      cursor: "default",
    },
    ".ds-radio[disabled] + label::before": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.gray.600")}`,
    },
    ".ds-radio[disabled] + label::after": {
      borderColor: theme("colors.gray.600"),
      backgroundColor: theme("colors.gray.600"),
    },
    ".ds-radio:not(:disabled):hover + label::before": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-radio:not(:focus-visible):focus + label::before": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
    },
    ".ds-radio-small + label, .ds-radio-small + label::before, .ds-radio-small + label::after":
      {
        "--radio-ring-radius": "1rem",
        "--radio-dot-radius": "0.5rem",
        "--radio-text-padding-left": "0.75rem",
        "--radio-text-padding-top": "0.3125rem",
      },
    ".ds-radio-mini + label, .ds-radio-mini + label::before, .ds-radio-mini + label::after":
      {
        "--radio-ring-radius": "0.75rem",
        "--radio-dot-radius": "0.3125rem",
        "--radio-text-padding-left": "0.625rem",
        "--radio-text-padding-top": "0.0625rem",
      },
  });
};
