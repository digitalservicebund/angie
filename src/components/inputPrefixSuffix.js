module.exports = function ({ addComponents, theme }) {
  const shared = {
    display: "flex",
    flexShrink: "0",
    alignItems: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    border: `2px solid ${theme("colors.blue.800")}`,
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: theme("colors.blue.800"),
  };

  addComponents({
    ".ds-input-prefix": {
      ...shared,
      borderRight: "0",
    },
    ".ds-input-suffix": {
      ...shared,
      borderLeft: "0",
    },
  });
};
