module.exports = function ({ addComponents, theme }) {
  const shared = {
    fontWeight: "normal",
    letterSpacing: "0.01rem",
  };

  const title = {
    ...shared,
    fontSize: "4rem",
    lineHeight: 1.1875,
    hyphens: "auto",
  };

  const heading01 = {
    ...shared,
    fontSize: "2.5rem",
    lineHeight: 1.25,
    hyphens: "auto",
    "@media (min-width: 500px)": {
      fontSize: "3rem",
      lineHeight: 1.2083,
    },
  };

  const heading02 = {
    ...shared,
    fontSize: "2rem",
    lineHeight: 1.1875,
  };

  const heading03 = {
    ...shared,
    fontSize: "1.625rem",
    lineHeight: 1.2308,
  };

  const subhead = {
    ...shared,
    fontSize: "1.25rem",
    lineHeight: 1.5,
  };

  const label = {
    fontWeight: "normal",
    lineHeight: 1.25,
  };

  const label01 = {
    ...label,
    fontSize: "1.125rem",
    letterSpacing: "0.01rem",
  };

  const label02 = {
    ...label,
    fontSize: "1rem",
  };

  const label03 = {
    ...label,
    fontSize: "0.875rem",
  };

  // deprecated
  const labelSection = {
    fontSize: "0.6875rem",
    lineHeight: 1.4545,
    letterSpacing: "0.0625rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const body = {
    fontWeight: "normal",
    lineHeight: 1.5,
  };

  const body01 = {
    ...body,
    fontSize: "1.125rem",
    letterSpacing: "0.01rem",
  };

  const body02 = {
    ...body,
    fontSize: "1rem",
  };

  const body03 = {
    ...body,
    fontSize: "0.875rem",
  };

  const link = {
    fontWeight: "normal",
    lineHeight: 1.5,
    color: theme("colors.blue.800"),
    textDecorationLine: "underline",
  };

  const link01 = {
    ...link,
    fontSize: "1.125rem",
    letterSpacing: "0.01rem",
  };

  const link02 = {
    ...link,
    fontSize: "1rem",
  };

  const link03 = {
    ...link,
    fontSize: "0.875rem",
  };

  addComponents({
    ".ds-title-reg": title,
    ".ds-heading-01-reg": heading01,
    ".ds-heading-01-bold": { ...heading01, fontWeight: "bold" },
    ".ds-heading-02-reg": heading02,
    ".ds-heading-02-bold": { ...heading02, fontWeight: "bold" },
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
    ".ds-body-01-bold": { ...body01, fontWeight: "bold" },
    ".ds-body-02-reg": body02,
    ".ds-body-02-bold": { ...body02, fontWeight: "bold" },
    ".ds-body-03-reg": body03,
    ".ds-body-03-bold": { ...body03, fontWeight: "bold" },
    ".ds-link-01-reg": link01,
    ".ds-link-01-bold": { ...link01, fontWeight: "bold" },
    ".ds-link-02-reg": link02,
    ".ds-link-02-bold": { ...link02, fontWeight: "bold" },
    ".ds-link-03-reg": link03,
    ".ds-link-03-bold": { ...link03, fontWeight: "bold" },
  });
};
