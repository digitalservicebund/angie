module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-button": {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "0",
      border: "0",
      fontWeight: theme("fontWeight.bold"),
      lineHeight: "1.375",
      textAlign: "center",
      textDecoration: "none",
      maxWidth: "100%",
      padding: "0.8125rem 1.5rem",
      backgroundColor: theme("colors.blue.800"),
      color: theme("colors.white"),
    },
    ".ds-button:hover": {
      backgroundColor: theme("colors.blue.700"),
    },
    ".ds-button:active": {
      backgroundColor: theme("colors.blue.500"),
      color: theme("colors.blue.800"),
    },
    ".ds-button:disabled": {
      cursor: "not-allowed",
      backgroundColor: theme("colors.gray.400"),
      color: theme("colors.gray.600"),
    },
    ".ds-button:focus": {
      outline: `${theme("colors.blue.800")} solid 4px`,
      outlineOffset: "4px",
    },
    ".ds-button:focus:not(:focus-visible)": {
      outline: "none",
    },
    ".ds-button:focus-visible": {
      outline: `${theme("colors.blue.800")} solid 4px`,
      outlineOffset: "4px",
    },
    ".ds-button-full-width": { width: "100%", justifyContent: "center" },
    ".ds-button-small": { paddingTop: "0.5625rem", paddingBottom: "0.5625rem" },
    ".ds-button-large": {
      paddingTop: "1.21875rem",
      paddingBottom: "1.21875rem",
      fontSize: "1.125rem",
      lineHeight: 1.3888,
    },
    ".ds-button-secondary": {
      backgroundColor: theme("colors.yellow.500"),
      boxShadow: `inset 0 0 0 2px ${theme("colors.blue.800")}`,
      color: theme("colors.blue.800"),
    },
    ".ds-button-secondary:not(:disabled):hover": {
      backgroundColor: theme("colors.yellow.700"),
    },
    ".ds-button-secondary:not(:disabled):active": {
      backgroundColor: theme("colors.yellow.400"),
    },
    ".ds-button-secondary:disabled": { boxShadow: "none" },
    ".ds-button-secondary:focus-visible": { boxShadow: "none" },
    ".ds-button-tertiary": {
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 2px ${theme("colors.blue.800")}`,
      color: theme("colors.blue.800"),
    },
    ".ds-button-tertiary:active, .ds-button-tertiary:focus, .ds-button-tertiary:hover":
      {
        backgroundColor: theme("colors.blue.200"),
      },
    ".ds-button-tertiary:active": { boxShadow: "none" },
    ".ds-button-tertiary:disabled": {
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 2px ${theme("colors.gray.600")}`,
      color: theme("colors.gray.600"),
    },
    ".ds-button-tertiary:focus-visible": { boxShadow: "none" },
    ".ds-button-ghost": {
      backgroundColor: "transparent",
      color: theme("colors.blue.800"),
      textDecoration: "underline",
    },
    ".ds-button-ghost:active, .ds-button-ghost:focus, .ds-button-ghost:hover": {
      backgroundColor: "transparent",
    },
    ".ds-button-ghost:focus, .ds-button-ghost:hover": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.gray.600")}`,
    },
    ".ds-button-ghost:active": { boxShadow: "none" },
    ".ds-button-ghost:disabled": {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: theme("colors.gray.600"),
    },
    ".ds-button-with-icon": { paddingTop: "0.75rem", paddingBottom: "0.75rem" },
    ".ds-button-with-icon.ds-button-small": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    ".ds-button-with-icon.ds-button-large": {
      paddingTop: "0.875rem",
      paddingBottom: "0.875rem",
    },
    ".ds-button-with-icon > svg": {
      flexShrink: 0,
      width: "1.5rem",
      height: "1.5rem",
      fill: "currentcolor",
    },
    ".ds-button-with-icon-only": {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
    },
    ".ds-button-with-icon-only.ds-button-small": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
    ".ds-button-with-icon-only.ds-button-large": {
      paddingLeft: "0.875rem",
      paddingRight: "0.875rem",
    },
    ".ds-button-with-icon.ds-button-large > svg": {
      width: "2.25rem",
      height: "2.25rem",
    },
    ".ds-button-with-icon > span": {
      paddingTop: "0.0625rem",
      paddingBottom: "0.0625rem",
    },
    ".ds-button-with-icon.ds-button-large > span": {
      paddingTop: "0.34375rem",
      paddingBottom: "0.34375rem",
    },
    ".ds-button-with-icon > svg + span:not(.sr-only)": {
      display: "block",
      marginLeft: "0.5rem",
    },
    ".ds-button-with-icon > span:not(.sr-only) + svg": { marginLeft: "0.5rem" },
  });
};
