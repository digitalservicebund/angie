const a11y = require("../utils/a11y");

module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-checkbox": a11y.srOnly,
    ".ds-checkbox + label": {
      position: "relative",
      display: "inline-block",
      paddingTop: "0.4375rem",
      paddingLeft: "3rem",
      minHeight: "2.5rem",
      touchAction: "manipulation",
      cursor: "pointer",
    },
    ".ds-checkbox + label::before, .ds-checkbox + label::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "0",
    },
    ".ds-checkbox + label::before": {
      left: "0",
      width: "2.5rem",
      height: "2.5rem",
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:not(.has-error):focus + label::before": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:not(.has-error):not(:focus-visible):focus + label::before": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:focus-visible + label::before": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:not(:disabled):hover + label::before": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:checked + label::after": {
      top: "1.25rem",
      left: "1.125rem",
      width: "1.0625rem",
      height: "0.4375rem",
      transform: "rotate(-48deg) translateY(-0.5rem)",
      border: "solid",
      borderWidth: "0 0 0.125rem 0.125rem",
      borderColor: theme("colors.blue.800"),
    },
    ".ds-checkbox:disabled + label::before": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.gray.600")}`,
    },
    ".ds-checkbox:disabled + label::after": {
      borderColor: theme("colors.gray.600"),
    },
    ".ds-checkbox:disabled + label": {
      cursor: "default",
    },
    ".ds-checkbox.has-error + label::before": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.red.800")}`,
    },
    ".ds-checkbox-small + label": {
      paddingTop: "0.25rem",
      paddingLeft: "2.5rem",
      minHeight: "2rem",
    },
    ".ds-checkbox-small + label::before": { width: "2rem", height: "2rem" },
    ".ds-checkbox-small:checked + label::after": {
      top: "1rem",
      left: "0.875rem",
    },
  });
};
