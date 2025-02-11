import type { Meta, StoryObj } from "@storybook/html";
import { clsx } from "clsx";
import dedent from "dedent";
import {
  htmlAttrs,
  loremSentences,
  loremWords,
} from "../../../.storybook/utils";

type TypeArgs = { name: string; text: string };

const meta = {
  title: "Styleguide/Typography",
  render: ({ name, text }) => `<div class="ds-${name}">${text}</div>`,
  argTypes: { text: { control: "text" } },
  args: { text: loremSentences(8) },
} satisfies Meta<TypeArgs>;

export default meta;

type Story = StoryObj<TypeArgs>;

export const TitleReg = {
  args: { name: "title-reg", text: loremWords(4) },
} satisfies Story;
export const Heading01Reg = {
  args: { name: "heading-01-reg", text: loremWords(4) },
} satisfies Story;
export const Heading01Bold = {
  args: { name: "heading-01-bold", text: loremWords(4) },
} satisfies Story;
export const Heading02Reg = {
  args: { name: "heading-02-reg", text: loremWords(8) },
} satisfies Story;
export const Heading02Bold = {
  args: { name: "heading-02-bold", text: loremWords(8) },
} satisfies Story;
export const Heading03Reg = {
  args: { name: "heading-03-reg", text: loremWords(8) },
} satisfies Story;
export const Heading03Bold = {
  args: { name: "heading-03-bold", text: loremWords(8) },
} satisfies Story;
export const Subhead = {
  args: { name: "subhead", text: loremWords(12) },
} satisfies Story;
export const Label01Reg = {
  args: { name: "label-01-reg", text: loremWords(2) },
} satisfies Story;
export const Label01Bold = {
  args: { name: "label-01-bold", text: loremWords(2) },
} satisfies Story;
export const Label02Reg = {
  args: { name: "label-02-reg", text: loremWords(2) },
} satisfies Story;
export const Label02Bold = {
  args: { name: "label-02-bold", text: loremWords(2) },
} satisfies Story;
export const Label03Reg = {
  args: { name: "label-03-reg", text: loremWords(2) },
} satisfies Story;
export const Label03Bold = {
  args: { name: "label-03-bold", text: loremWords(2) },
} satisfies Story;
export const LabelSection = {
  args: { name: "label-section", text: loremWords(2) },
} satisfies Story;
export const Body01Reg = {
  args: { name: "body-01-reg", text: loremSentences(4) },
} satisfies Story;
export const Body01Bold = {
  args: { name: "body-01-bold", text: loremSentences(4) },
} satisfies Story;
export const Body02Reg = {
  args: { name: "body-02-reg", text: loremSentences(5) },
} satisfies Story;
export const Body02Bold = {
  args: { name: "body-02-bold", text: loremSentences(5) },
} satisfies Story;
export const Body03Reg = {
  args: { name: "body-03-reg", text: loremSentences(5) },
} satisfies Story;
export const Body03Bold = {
  args: { name: "body-03-bold", text: loremSentences(5) },
} satisfies Story;
export const Link01Reg = {
  args: { name: "link-01-reg", text: loremWords(4) },
} satisfies Story;
export const Link01Bold = {
  args: { name: "link-01-bold", text: loremWords(4) },
} satisfies Story;
export const Link02Reg = {
  args: { name: "link-02-reg", text: loremWords(5) },
} satisfies Story;
export const Link02Bold = {
  args: { name: "link-02-bold", text: loremWords(5) },
} satisfies Story;
export const Link03Reg = {
  args: { name: "link-03-reg", text: loremWords(5) },
} satisfies Story;
export const Link03Bold = {
  args: { name: "link-03-bold", text: loremWords(5) },
} satisfies Story;
