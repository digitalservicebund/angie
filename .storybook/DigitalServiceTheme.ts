import { create } from "@storybook/theming/create";
import digitalServiceLogo from "./assets/images/logo.png";

export default create({
  base: "light",
  brandTitle: "DigitalService Design System",
  brandUrl: "https://digitalservice.bund.de",
  brandImage: digitalServiceLogo,
  brandTarget: "_self",

  fontBase: "Inter, Arial, sans-serif", // UI only (sidebar), does not affect preview + docs
  colorPrimary: "blue", // where is that used? not links
  colorSecondary: "blue",

  appBorderRadius: 0,

  textColor: "#000",

  barSelectedColor: "#00f",
  barHoverColor: "#00f",
});
