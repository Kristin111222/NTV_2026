import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskRow from "../tasks/TaskRow/TaskRow";

describe("TaskRow", () => {
  const mockTask = {
    id: "1",
    title: "Finish project",
    completed: false,
    priority: "high" as const,
  };

  it("renders task title", () => {
    render(
      <TaskRow
        task={mockTask}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(
      screen.getByText("Finish project")
    ).toBeInTheDocument();
  });

  it("calls onToggle when checkbox is clicked", () => {
    const onToggle = vi.fn();

    render(
      <TaskRow
        task={mockTask}
        onToggle={onToggle}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalled();
  });

  it("calls onEdit when edit button is clicked", () => {
    const onEdit = vi.fn();

    render(
      <TaskRow
        task={mockTask}
        onToggle={() => {}}
        onEdit={onEdit}
        onDelete={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Edit"));

    expect(onEdit).toHaveBeenCalled();
  });

  it("calls onDelete when delete button is clicked", () => {
    const onDelete = vi.fn();

    render(
      <TaskRow
        task={mockTask}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(onDelete).toHaveBeenCalled();
  });
});