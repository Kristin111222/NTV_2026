import type { Meta, StoryObj } from "@storybook/react";
import TaskRow from "./TaskRow";

const meta: Meta<typeof TaskRow> = {
  title: "Tasks/TaskRow",
  component: TaskRow,
};

export default meta;

type Story = StoryObj<typeof TaskRow>;

export const Pending: Story = {
  args: {
    task: {
      id: "1",
      title: "Finish React project",
      completed: false,
      priority: "medium",
    },
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};

export const Completed: Story = {
  args: {
    task: {
      id: "2",
      title: "Write tests",
      completed: true,
      priority: "high",
    },
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};

export const LowPriority: Story = {
  args: {
    task: {
      id: "3",
      title: "Update README",
      completed: false,
      priority: "low",
    },
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};