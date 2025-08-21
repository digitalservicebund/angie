import type { Meta, StoryObj } from "@storybook/html-vite";
import { clsx } from "clsx";
import dedent from "dedent";
import {
  htmlAttrs,
  loremSentences,
  loremWords,
} from "../../../.storybook/utils";

type TextareaArgs = {
  disabled?: boolean;
  error?: boolean;
  label: string;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  value?: string;
};

const meta = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  render: (
    { disabled, error, label, placeholder, readonly, rows, value },
    { id },
  ) => {
    const cssClasses = clsx("ds-textarea", {
      "has-error": error,
    });
    const attrs = htmlAttrs({
      className: cssClasses,
      disabled,
      id,
      placeholder,
      readonly,
      rows,
    });
    return dedent`
      <div>
        <label for="${id}">${label}</label>
        <textarea ${attrs}>${value}</textarea>
      </div>
    `;
  },
  argTypes: {
    disabled: { description: "Is the textarea not available for interaction?" },
    error: { description: "Is the textarea highlighted as not valid?" },
    label: { control: "text" },
    placeholder: { control: "text" },
    readonly: { description: "Is the textarea readonly?" },
    value: { control: "text" },
  },
  args: {
    disabled: false,
    error: false,
    label: loremWords(5),
    readonly: false,
    rows: 5,
    value: loremSentences(5),
  },
} satisfies Meta<TextareaArgs>;

export default meta;

type Story = StoryObj<TextareaArgs>;

export const Default = {} satisfies Story;
export const Placeholder = {
  args: { placeholder: loremWords(1), value: "" },
} satisfies Story;
export const Readonly = { args: { readonly: true } } satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const Error = { args: { error: true } } satisfies Story;
