import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import "../../index.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    size: "sm",
    colorscheme: "primary",
  },
};

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "sm",
    colorscheme: "primary",
  },
};
