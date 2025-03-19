module.exports = function ({ addUtilities, matchUtilities, theme }) {
  addUtilities(
    {
      ".ds-stack": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      },
      ".ds-stack > *": { marginBlock: "0" },
      ".ds-stack > * + *": {
        marginBlockStart: "var(--ds-stack-space)",
      },
    },
    ["responsive"],
  );

  matchUtilities(
    {
      "ds-stack": (value) => ({
        "--ds-stack-space": value,
      }),
    },
    {
      values: theme("spacing"),
    },
  );
};
