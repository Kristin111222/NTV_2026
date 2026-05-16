import type { Meta, StoryObj } from "@storybook/react";
import DashboardStats from "./stats";

const meta: Meta<typeof DashboardStats> = {
  title: "Dashboard/Stats",
  component: DashboardStats,
};

export default meta;

type Story = StoryObj<typeof DashboardStats>;

export const Default: Story = {
  args: {
    total: 12,
    completed: 8,
    pending: 4,
  },
};

export const Empty: Story = {
  args: {
    total: 0,
    completed: 0,
    pending: 0,
  },
};

export const Busy: Story = {
  args: {
    total: 45,
    completed: 30,
    pending: 15,
  },
};