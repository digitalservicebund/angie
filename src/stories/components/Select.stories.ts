import type { Meta, StoryObj } from "@storybook/html";
import { clsx } from "clsx";
import dedent from "dedent";
import { htmlAttrs, loremSentences } from "../../../.storybook/utils";

type SelectArgs = {
  label: string;
  size?: "default" | "medium" | "small";
  disabled?: boolean;
  error?: boolean;
};

const meta = {
  title: "Components/Select",
  render: ({ label, size, disabled, error }, { id }) => {
    const cssClasses = clsx("ds-select", {
      "ds-select-medium": size === "medium",
      "ds-select-small": size === "small",
      "has-error": error,
    });
    const attrs = htmlAttrs({
      className: cssClasses,
      disabled,
      id,
    });

    return dedent`
      <div>
        <label for="${id}">${label}</label>
        <select ${attrs}>
          <option value="">Bitte auswählen</option>
          <option value="1">Option 1</option>
          <option value="2" disabled>Option 2 (disabled)</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    `;
  },
  argTypes: {
    label: { control: "text" },
    size: {
      options: ["default", "medium", "small"],
      control: { type: "radio" },
    },
    disabled: {
      description: "Is the select not available for interaction?",
    },
    error: {
      description: "Is the select highlighted as not valid?",
    },
  },
  args: {
    size: "default",
    label: loremSentences(1),
    disabled: false,
    error: false,
  },
} satisfies Meta<SelectArgs>;

export default meta;

type Story = StoryObj<SelectArgs>;

export const Default = {} satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const Error = { args: { error: true } } satisfies Story;
export const Small = { args: { size: "small" } } satisfies Story;
export const Medium = { args: { size: "medium" } } satisfies Story;
