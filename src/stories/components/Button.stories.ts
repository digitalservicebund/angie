import type { Meta, StoryObj } from "@storybook/html";
import { clsx } from "clsx";
import dedent from "dedent";
import {
  htmlAttrs,
  loremSentences,
  loremWords,
} from "../../../.storybook/utils";

type ButtonArgs = {
  label: string;
  size?: "default" | "small" | "large";
  appearance?: "default" | "secondary" | "tertiary" | "ghost";
  fullWidth?: boolean;
  withIcon?: boolean;
  withIconRight?: boolean;
  withIconOnly?: boolean;
  disabled?: boolean;
  isLink?: boolean;
};

const meta = {
  title: "Components/Button",
  render: ({
    label,
    size,
    appearance,
    fullWidth,
    withIcon,
    withIconRight,
    withIconOnly,
    disabled,
    isLink,
  }) => {
    const cssClasses = clsx("ds-button", {
      "ds-button-large": size === "large",
      "ds-button-small": size === "small",
      "ds-button-secondary": appearance === "secondary",
      "ds-button-tertiary": appearance === "tertiary",
      "ds-button-ghost": appearance === "ghost",
      "is-disabled": disabled,
      "ds-button-with-icon": withIcon || withIconRight,
      "ds-button-with-icon-only": withIconOnly,
      "ds-button-full-width": fullWidth,
    });
    const attrs = htmlAttrs({ className: cssClasses });

    const icon = dedent`
      <svg class="ds-button-icon" width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z"></path>
      </svg>
    `;

    if (disabled) {
      return dedent`
        <div ${attrs}>
          ${label}
        </div>
      `;
    }

    if (isLink) {
      return dedent`
        <a href="https://digitalservice.bund.de" target="_blank" role="button" ${attrs}>
          ${label}
        </a>
      `;
    }

    if (withIcon || withIconRight) {
      return dedent`
        <button ${attrs}>
          ${withIcon ? icon : ""}
          <span class="ds-button-label">
            ${label}
          </span>
          ${withIconRight ? icon : ""}
        </button>
      `;
    }

    if (withIconOnly) {
      return dedent`
        <button ${attrs}>
          ${icon}
          <span class="sr-only">
            ${label}
          </span>
        </button>
      `;
    }

    return dedent`
      <button ${attrs}>
        ${label}
      </button>
    `;
  },
  argTypes: {
    disabled: {
      description: "Is the button not available for interaction?",
    },
    label: { control: "text" },
    withIcon: { control: "boolean" },
    withIconRight: { control: "boolean" },
    withIconOnly: { control: "boolean" },
    size: {
      options: ["default", "small", "large"],
      control: { type: "radio" },
    },
    appearance: {
      options: ["default", "secondary", "tertiary", "ghost"],
      control: { type: "radio" },
    },
  },
  args: {
    disabled: false,
    label: loremWords(4),
    size: "default",
    appearance: "default",
    withIcon: false,
    withIconRight: false,
    withIconOnly: false,
  },
} satisfies Meta<ButtonArgs>;

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Default = {} satisfies Story;
export const Small = { args: { size: "small" } } satisfies Story;
export const Large = { args: { size: "large" } } satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const Link = { args: { isLink: true } } satisfies Story;
export const WithIcon = { args: { withIcon: true } } satisfies Story;
export const WithIconRight = { args: { withIconRight: true } } satisfies Story;
export const WithIconOnly = { args: { withIconOnly: true } } satisfies Story;
export const FullWidth = { args: { fullWidth: true } } satisfies Story;
export const FullWidthWithIcon = {
  args: { fullWidth: true, withIcon: true },
} satisfies Story;
export const LongText = { args: { label: loremSentences(4) } } satisfies Story;
export const LongTextWithIcon = {
  args: { label: loremSentences(4), withIcon: true },
} satisfies Story;

export const Secondary = { args: { appearance: "secondary" } } satisfies Story;
export const SecondarySmall = {
  args: { appearance: "secondary", size: "small" },
} satisfies Story;
export const SecondaryLarge = {
  args: { appearance: "secondary", size: "large" },
} satisfies Story;
export const SecondaryDisabled = {
  args: { appearance: "secondary", disabled: true },
} satisfies Story;
export const SecondaryLink = {
  args: { appearance: "secondary", isLink: true },
} satisfies Story;
export const SecondaryWithIcon = {
  args: { appearance: "secondary", withIcon: true },
} satisfies Story;
export const SecondaryWithIconRight = {
  args: { appearance: "secondary", withIconRight: true },
} satisfies Story;
export const SecondaryWithIconOnly = {
  args: { appearance: "secondary", withIconOnly: true },
} satisfies Story;
export const SecondaryFullWidth = {
  args: { appearance: "secondary", fullWidth: true },
} satisfies Story;
export const SecondaryFullWidthWithIcon = {
  args: { appearance: "secondary", fullWidth: true, withIcon: true },
} satisfies Story;
export const SecondaryLongText = {
  args: { appearance: "secondary", label: loremSentences(4) },
} satisfies Story;
export const SecondaryLongTextWithIcon = {
  args: { appearance: "secondary", label: loremSentences(4), withIcon: true },
} satisfies Story;

export const Tertiary = { args: { appearance: "tertiary" } } satisfies Story;
export const TertiarySmall = {
  args: { appearance: "tertiary", size: "small" },
} satisfies Story;
export const TertiaryLarge = {
  args: { appearance: "tertiary", size: "large" },
} satisfies Story;
export const TertiaryDisabled = {
  args: { appearance: "tertiary", disabled: true },
} satisfies Story;
export const TertiaryLink = {
  args: { appearance: "tertiary", isLink: true },
} satisfies Story;
export const TertiaryWithIcon = {
  args: { appearance: "tertiary", withIcon: true },
} satisfies Story;
export const TertiaryWithIconRight = {
  args: { appearance: "tertiary", withIconRight: true },
} satisfies Story;
export const TertiaryWithIconOnly = {
  args: { appearance: "tertiary", withIconOnly: true },
} satisfies Story;
export const TertiaryFullWidth = {
  args: { appearance: "tertiary", fullWidth: true },
} satisfies Story;
export const TertiaryFullWidthWithIcon = {
  args: { appearance: "tertiary", fullWidth: true, withIcon: true },
} satisfies Story;
export const TertiaryLongText = {
  args: { appearance: "tertiary", label: loremSentences(4) },
} satisfies Story;
export const TertiaryLongTextWithIcon = {
  args: { appearance: "tertiary", label: loremSentences(4), withIcon: true },
} satisfies Story;

export const Ghost = { args: { appearance: "ghost" } } satisfies Story;
export const GhostSmall = {
  args: { appearance: "ghost", size: "small" },
} satisfies Story;
export const GhostLarge = {
  args: { appearance: "ghost", size: "large" },
} satisfies Story;
export const GhostDisabled = {
  args: { appearance: "ghost", disabled: true },
} satisfies Story;
export const GhostLink = {
  args: { appearance: "ghost", isLink: true },
} satisfies Story;
export const GhostWithIcon = {
  args: { appearance: "ghost", withIcon: true },
} satisfies Story;
export const GhostWithIconRight = {
  args: { appearance: "ghost", withIconRight: true },
} satisfies Story;
export const GhostWithIconOnly = {
  args: { appearance: "ghost", withIconOnly: true },
} satisfies Story;
export const GhostFullWidth = {
  args: { appearance: "ghost", fullWidth: true },
} satisfies Story;
export const GhostFullWidthWithIcon = {
  args: { appearance: "ghost", fullWidth: true, withIcon: true },
} satisfies Story;
export const GhostLongText = {
  args: { appearance: "ghost", label: loremSentences(4) },
} satisfies Story;
export const GhostLongTextWithIcon = {
  args: { appearance: "ghost", label: loremSentences(4), withIcon: true },
} satisfies Story;
