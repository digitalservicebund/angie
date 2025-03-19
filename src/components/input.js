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
      backgroundColor: theme("colors.blue.300"),
    },
    ".ds-input:disabled": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.gray.600")} !important`,
      color: theme("colors.gray.600"),
      cursor: "not-allowed",
      backgroundColor: theme("colors.white"),
    },
    ".ds-input.has-error, .ds-textarea.has-error": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.red.800")}`,
      backgroundColor: theme("colors.red.200"),
    },
    ".ds-input:focus, .ds-input:hover": {
      boxShadow: `inset 0 0 0 4px ${theme("colors.blue.800")}`,
    },
    ".ds-input::-moz-placeholder, .ds-textarea::-moz-placeholder": {
      fontFamily: "BundesSerifWeb, serif",
      fontStyle: "italic",
      color: theme("colors.gray.800"),
    },
    ".ds-input::placeholder, .ds-textarea::placeholder": {
      fontFamily: "BundesSerifWeb, serif",
      fontStyle: "italic",
      color: theme("colors.gray.800"),
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
