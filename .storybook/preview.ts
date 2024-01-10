import "../_site/fonts.css";
import "../build/styles.css";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Homepage",
          "Styleguide",
          "Accessibility",
          "Components",
          "Development",
        ],
      },
    },
  },
};

export default preview;
