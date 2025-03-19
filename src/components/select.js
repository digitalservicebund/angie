module.exports = function ({ addComponents, theme }) {
  addComponents({
    ".ds-select": {
      display: "block",
      width: "100%",
      paddingLeft: "1.5rem",
      paddingRight: "4.5rem",
      boxShadow: `inset 0 0 0 2px ${theme("colors.blue.800")}`,
      backgroundColor: "white",
      outline: "0",
      border: "none",
      height: "4rem",
      appearance: "none",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.41.295 6 4.875l4.59-4.58L12 1.705l-6 6-6-6L1.41.295Z' fill='%23000'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 1.5rem center",
    },
    ".ds-select:hover, .ds-select:focus": {
      outline: `solid 4px ${theme("colors.blue.800")}`,
      outlineOffset: "-4px",
    },
    ".ds-select:disabled": {
      outline: "0",
      boxShadow: `inset 0 0 0 2px ${theme("colors.gray.600")}`,
      color: theme("colors.gray.600"),
      cursor: "not-allowed",
      opacity: 1,
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.41.295 6 4.875l4.59-4.58L12 1.705l-6 6-6-6L1.41.295Z' fill='%23B8BDC3'/%3E%3C/svg%3E\")",
    },
    ".ds-select.has-error": {
      boxShadow: `inset 0 0 0 2px ${theme("colors.red.800")}`,
      backgroundColor: theme("colors.red.200"),
    },
    ".ds-select-medium": {
      height: "3rem",
    },
    ".ds-select-small": {
      height: "2.5rem",
    },
    ".ds-select option": { backgroundColor: "white !important" },
  });
};
