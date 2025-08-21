import type { Meta, StoryObj } from "@storybook/html-vite";
import { clsx } from "clsx";
import dedent from "dedent";
import {
  htmlAttrs,
  loremSentences,
  loremWords,
} from "../../../.storybook/utils";

type InputArgs = {
  label: string;
  placeholder?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  size?: "default" | "medium" | "small";
  type?: string;
  readonly?: boolean;
  disabled?: boolean;
  error?: boolean;
};

const meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  render: (
    {
      label,
      placeholder,
      value,
      prefix,
      suffix,
      size,
      type,
      readonly,
      disabled,
      error,
    },
    { id },
  ) => {
    const cssClasses = clsx("ds-input", {
      "ds-input-medium": size === "medium",
      "ds-input-small": size === "small",
      "has-error": error,
    });
    const attrs = htmlAttrs({
      className: cssClasses,
      disabled,
      id,
      readonly,
      placeholder,
      value,
      type,
    });

    const labelElement = `<label for="${id}">${label}</label>`;
    const inputElement = `<input ${attrs} />`;

    if (prefix || suffix) {
      return dedent`
        <div>
          ${labelElement}
          <div class="ds-input-group">
            ${prefix ? `<div class="ds-input-prefix">${prefix}</div>` : ""}
            ${inputElement}
            ${suffix ? `<div class="ds-input-suffix">${suffix}</div>` : ""}
          </div>
        </div>
      `;
    }

    return dedent`
      <div>
        ${labelElement}
        ${inputElement}
      </div>
    `;
  },
  argTypes: {
    label: { control: "text" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    size: {
      options: ["default", "medium", "small"],
      control: { type: "radio" },
    },
    type: {
      options: ["text", "email", "number", "password", "search", "tel", "url"],
      control: { type: "select" },
    },
    readonly: {
      description: "Is the input readonly?",
    },
    disabled: {
      description: "Is the input not available for interaction?",
    },
    error: {
      description: "Is the input highlighted as not valid?",
    },
  },
  args: {
    size: "default",
    type: "text",
    value: loremWords(2),
    label: loremSentences(1),
    readonly: false,
    disabled: false,
    error: false,
  },
} satisfies Meta<InputArgs>;

export default meta;

type Story = StoryObj<InputArgs>;

export const Default = {} satisfies Story;
export const Placeholder = {
  args: { placeholder: loremWords(1), value: "" },
} satisfies Story;
export const Readonly = { args: { readonly: true } } satisfies Story;
export const Disabled = { args: { disabled: true } } satisfies Story;
export const Error = { args: { error: true } } satisfies Story;
export const Prefix = { args: { prefix: "prefix" } } satisfies Story;
export const Suffix = { args: { suffix: "suffix" } } satisfies Story;
export const Small = { args: { size: "small" } } satisfies Story;
export const Medium = { args: { size: "medium" } } satisfies Story;
