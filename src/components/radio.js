module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-radio, .ds-radio + label, .ds-radio::after": {
      "--radio-ring-radius": "1.25rem",
      "--radio-ring-diameter": "calc(var(--radio-ring-radius) * 2)",
      "--radio-dot-radius": "0.75rem",
      "--radio-text-padding-left": "1rem",
      "--radio-text-padding-top": "0.4375rem",
    },
    ".ds-radio": {
      appearance: "none",
      width: "var(--radio-ring-diameter)",
      height: "var(--radio-ring-diameter)",
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
      position: "relative",
      outline: "none",
      cursor: "pointer",
      borderRadius: "50%",
      float: "left",
      flex: "none",
      background: "transparent" /* for old Safari */,
    },
    ".ds-radio + label": {
      position: "relative",
      paddingTop: "var(--radio-text-padding-top)",
      paddingLeft: "var(--radio-text-padding-left)",
      minHeight: "var(--radio-ring-diameter)",
      touchAction: "manipulation",
      cursor: "pointer",
      verticalAlign: "top",
      float: "left",
    },
    ".ds-radio::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "var(--radio-ring-radius)",
      left: "0",
      transform: "translateY(-50%)",
    },
    ".ds-radio:focus, .ds-radio:focus-visible": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-radio:checked::after": {
      left: "calc(var(--radio-ring-radius) - var(--radio-dot-radius))",
      width: "0",
      height: "0",
      border: `solid var(--radio-dot-radius) ${theme("colors.blue.800")}`,
      backgroundColor: theme("colors.blue.800"),
      borderRadius: "50%",
    },
    ".ds-radio[disabled], .ds-radio[disabled] + label": {
      cursor: "default",
    },
    ".ds-radio[disabled]": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.gray.600")}`,
    },
    ".ds-radio[disabled]::after": {
      borderColor: theme("colors.gray.600"),
      backgroundColor: theme("colors.gray.600"),
    },
    ".ds-radio:not(:disabled):hover": {
      boxShadow: `inset 0 0 0 0.25rem ${theme("colors.blue.800")}`,
    },
    ".ds-radio:not(:focus-visible):focus": {
      boxShadow: `inset 0 0 0 0.125rem ${theme("colors.blue.800")}`,
    },
    ".ds-radio-small, .ds-radio-small + label, .ds-radio-small::after": {
      "--radio-ring-radius": "1rem",
      "--radio-dot-radius": "0.5rem",
      "--radio-text-padding-left": "0.75rem",
      "--radio-text-padding-top": "0.3125rem",
    },
    " .ds-radio-mini, .ds-radio-mini + label, .ds-radio-mini::after": {
      "--radio-ring-radius": "0.75rem",
      "--radio-dot-radius": "0.3125rem",
      "--radio-text-padding-left": "0.625rem",
      "--radio-text-padding-top": "0.0625rem",
    },
    ":has(> .ds-radio + label):has(> :nth-child(2):last-child)": {
      display: "flex",
    },
  });
};
