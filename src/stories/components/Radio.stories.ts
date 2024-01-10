import type { Meta, StoryObj } from "@storybook/html";
import { clsx } from "clsx";
import dedent from "dedent";
import { htmlAttrs, loremSentences } from "../../../.storybook/utils";

type RadioArgs = {
  checked?: boolean;
  disabled?: boolean;
  label: string;
  size?: "default" | "small" | "mini";
};

const meta = {
  title: "Components/Radio",
  render: ({ label, size, checked, disabled }, { id }) => {
    const cssClasses = clsx("ds-radio", {
      "ds-radio-mini": size === "mini",
      "ds-radio-small": size === "small",
    });
    const attrs = htmlAttrs({ checked, className: cssClasses, disabled, id });
    return dedent`
      <div class="flex">
        <input type="radio" ${attrs} />
        <label for="${id}">${label}</label>
      </div>
    `;
  },
  argTypes: {
    checked: { description: "Is the radio button selected?" },
    disabled: {
      description: "Is the radio button not available for interaction?",
    },
    label: { control: "text" },
    size: {
      options: ["default", "small", "mini"],
      control: { type: "radio" },
    },
  },
  args: {
    checked: false,
    disabled: false,
    label: loremSentences(4),
    size: "default",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/49Gxm2IajuwbGhj37zu9x0/Angie-Components?node-id=492%3A734",
    },
  },
} satisfies Meta<RadioArgs>;

export default meta;

type Story = StoryObj<RadioArgs>;

export const Default = {} satisfies Story;
export const Small = { args: { size: "small" } } satisfies Story;
export const Mini = { args: { size: "mini" } } satisfies Story;
export const Checked = { args: { checked: true } } satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const CheckedDisabled = {
  args: { checked: true, disabled: true },
} satisfies Story;
