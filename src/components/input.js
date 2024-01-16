module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-input, .ds-textarea": {
      display: "block",
      width: "100%",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      boxShadow: `inset 0 0 0 2px ${theme("colors.blue.800")}`,
      backgroundColor: "white",
      outline: "0",
      border: "none",
      borderRadius: "0",
      appearance: "none",
    },
    ".ds-input": {
      height: "4rem",
      paddingTop: "0",
      paddingBottom: "0",
    },
    ".ds-textarea": {
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
    },
    ".ds-input:read-only": {
      boxShadow: "none !important",
    },
    ".ds-input:disabled": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.gray.600")} !important`,
      color: theme("colors.gray.600"),
      cursor: "not-allowed",
    },
    ".ds-input.has-error": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.red.800")}`,
      backgroundColor: theme("colors.red.200"),
    },
    ".ds-input:focus, .ds-input:hover": {
      boxShadow: `inset 0 0 0 4px ${theme("colors.blue.800")}`,
    },
    "::-webkit-input-placeholder": {
      fontFamily: "BundesSansWeb, sans-serif",
      color: `${theme("colors.gray.800")} !important`,
    },
    "::-moz-placeholder": {
      fontFamily: "BundesSansWeb, sans-serif",
      color: `${theme("colors.gray.800")} !important`,
    },
    ":-ms-input-placeholder": {
      fontFamily: "BundesSansWeb, sans-serif",
      color: `${theme("colors.gray.800")} !important`,
    },
    ":-moz-placeholder": {
      fontFamily: "BundesSansWeb, sans-serif",
      color: `${theme("colors.gray.800")} !important`,
    },
    ".ds-input-medium": {
      height: "3rem",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
    ".ds-input-small": {
      height: "2.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  });
};
