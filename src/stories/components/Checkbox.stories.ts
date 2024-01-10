import type { Meta, StoryObj } from "@storybook/html";
import { clsx } from "clsx";
import dedent from "dedent";
import { htmlAttrs, loremSentences } from "../../../.storybook/utils";

type CheckboxArgs = {
  label: string;
  size?: "default" | "small" | "mini";
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
};

const meta = {
  title: "Components/Checkbox",
  render: ({ label, size, checked, disabled, error }, { id }) => {
    const cssClasses = clsx("ds-checkbox", {
      "ds-checkbox-mini": size === "mini",
      "ds-checkbox-small": size === "small",
      "has-error": error,
    });
    const attrs = htmlAttrs({ checked, className: cssClasses, disabled, id });
    return dedent`
      <div class="flex">
        <input type="checkbox" ${attrs} />
        <label for="${id}">${label}</label>
      </div>
    `;
  },
  argTypes: {
    label: { control: "text" },
    size: {
      options: ["default", "small", "mini"],
      control: { type: "radio" },
    },
    checked: {
      description: "Is the checkbox selected?",
    },
    disabled: {
      description: "Is the checkbox not available for interaction?",
    },
    error: {
      description: "Is the checkbox highlighted as not valid?",
    },
  },
  args: {
    size: "default",
    label: loremSentences(4),
    checked: false,
    disabled: false,
    error: false,
  },
} satisfies Meta<CheckboxArgs>;

export default meta;

type Story = StoryObj<CheckboxArgs>;

export const Default = {} satisfies Story;
export const Small = { args: { size: "small" } } satisfies Story;
export const Mini = { args: { size: "mini" } } satisfies Story;
export const Checked = { args: { checked: true } } satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const CheckedDisabled = {
  args: { checked: true, disabled: true },
} satisfies Story;
export const Error = { args: { error: true } } satisfies Story;
