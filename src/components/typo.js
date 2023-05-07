module.exports = function ({ addComponents, theme }) {
  const shared = {
    fontWeight: "normal",
    letterSpacing: "0.01rem",
  };

  const heading01 = {
    ...shared,
    fontSize: "4rem",
    lineHeight: 1.0625,
    hyphens: "auto",
  };

  const heading02 = {
    ...shared,
    fontSize: "1.875rem",
    lineHeight: 1.2333,
  };

  const heading03 = {
    ...shared,
    fontSize: "1.5rem",
    lineHeight: 1.25,
  };

  const subhead = {
    ...shared,
    fontSize: "1.125rem",
    lineHeight: 1.4444,
  };

  const label01 = {
    ...shared,
    fontSize: "1.125rem",
    lineHeight: 1.4444,
  };

  const label02 = {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: 1.375,
  };

  const label03 = {
    ...shared,
    fontSize: "0.875rem",
    lineHeight: 1.2857,
  };

  const labelSection = {
    fontSize: "0.6875rem",
    lineHeight: 1.4545,
    letterSpacing: "0.0625rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const body01 = {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: 1.625,
    letterSpacing: "0.01rem",
  };

  const body02 = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    lineHeight: 1.5714,
  };

  const link = {
    fontWeight: "bold",
    color: theme("colors.blue.800"),
  };

  const link01 = {
    ...link,
    fontSize: "1rem",
    lineHeight: 1.625,
    letterSpacing: "0.01rem",
  };

  const link02 = {
    ...link,
    fontSize: "0.875rem",
    lineHeight: 1.5714,
  };

  const link03 = {
    ...link,
    fontSize: "1.125rem",
    lineHeight: 1.4444,
    letterSpacing: "0.01rem",
  };

  addComponents({
    ".ds-heading-01-reg": heading01,
    ".ds-heading-02-reg": heading02,
    ".ds-heading-03-reg": heading03,
    ".ds-heading-03-bold": { ...heading03, fontWeight: "bold" },
    ".ds-subhead": subhead,
    ".ds-label-01-reg": label01,
    ".ds-label-01-bold": { ...label01, fontWeight: "bold" },
    ".ds-label-02-reg": label02,
    ".ds-label-02-bold": {
      ...label02,
      fontWeight: "bold",
      letterSpacing: "0.01rem",
    },
    ".ds-label-03-reg": label03,
    ".ds-label-03-bold": { ...label03, fontWeight: "bold" },
    ".ds-label-section": labelSection,
    ".ds-body-01-reg": body01,
    ".ds-body-02-reg": body02,
    ".ds-link-01-bold": link01,
    ".ds-link-02-bold": link02,
    ".ds-link-03-bold": link03,
  });
};
