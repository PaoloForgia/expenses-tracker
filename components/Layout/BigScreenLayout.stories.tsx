import type { Meta, StoryObj } from "@storybook/react";
import Component from "./BigScreenLayout";

const meta: Meta<typeof Component> = { title: "Layout/Big Screen Layout", component: Component };

export default meta;

type Story = StoryObj<typeof Component>;

export const Basic: Story = {};
