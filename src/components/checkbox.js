module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-checkbox": {
      appearance: "none",
      width: "2.5rem",
      height: "2.5rem",
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
      position: "relative",
      outline: "none",
      cursor: "pointer",
      float: "left",
      flex: "none",
    },
    ".ds-checkbox + label": {
      position: "relative",
      paddingTop: "0.4375rem",
      paddingLeft: "0.5rem",
      minHeight: "2.5rem",
      touchAction: "manipulation",
      cursor: "pointer",
      verticalAlign: "top",
      float: "left",
    },
    ".ds-checkbox::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "0",
    },
    ".ds-checkbox:not(.has-error):focus": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:not(.has-error):not(:focus-visible):focus": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:focus-visible": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:not(:disabled):hover": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-checkbox:checked::after": {
      top: "1.25rem",
      left: "1.125rem",
      width: "1.0625rem",
      height: "0.4375rem",
      transform: "rotate(-48deg) translateY(-0.5rem)",
      border: "solid",
      borderWidth: "0 0 0.125rem 0.125rem",
      borderColor: theme("colors.blue.800"),
    },
    ".ds-checkbox:disabled": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.gray.600")}`,
    },
    ".ds-checkbox:disabled::after": {
      borderColor: theme("colors.gray.600"),
    },
    ".ds-checkbox:disabled, .ds-checkbox:disabled + label": {
      cursor: "default",
    },
    ".ds-checkbox.has-error": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.red.800")}`,
    },
    ".ds-checkbox-small + label": {
      paddingTop: "0.25rem",
      paddingLeft: "0.5rem",
      minHeight: "2rem",
    },
    ".ds-checkbox-small": {
      width: "2rem",
      height: "2rem",
    },
    ".ds-checkbox-small:checked::after": {
      top: "1rem",
      left: "0.875rem",
    },
    ":has(> .ds-checkbox + label):has(> :nth-child(2):last-child)": {
      display: "flex",
    },
  });
};
