import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    id: "1",
    name: "My First Project",
    onDelete: (id: string) => console.log(id),
    onOpen: (id: string) => console.log(id),
  },
};