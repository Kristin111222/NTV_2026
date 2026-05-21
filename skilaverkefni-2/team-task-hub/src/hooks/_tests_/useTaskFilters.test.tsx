import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTaskFilters } from "../useTaskFilters/useTaskFilters";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  projectId: string;
  priority: "low" | "medium" | "high";
};

type Filters = {
  search: string;
  status: "all" | "completed" | "active";
  priority: "all" | "low" | "medium" | "high";
};

describe("useTaskFilters", () => {
  const mockTasks: Task[] = [
    {
      id: "1",
      title: "Finish React project",
      completed: false,
      projectId: "p1",
      priority: "high",
    },
    {
      id: "2",
      title: "Write tests",
      completed: true,
      projectId: "p1",
      priority: "medium",
    },
    {
      id: "3",
      title: "Clean desk",
      completed: false,
      projectId: "p2",
      priority: "low",
    },
  ];

  it("filters tasks by search", () => {
    const filters: Filters = {
      search: "react",
      status: "all",
      priority: "all",
    };

    const { result } = renderHook(() =>
      useTaskFilters(mockTasks, filters)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].title).toBe("Finish React project");
  });

  it("filters tasks by completed status", () => {
    const filters: Filters = {
      search: "",
      status: "completed",
      priority: "all",
    };

    const { result } = renderHook(() =>
      useTaskFilters(mockTasks, filters)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].completed).toBe(true);
  });

  it("filters tasks by priority", () => {
    const filters: Filters = {
      search: "",
      status: "all",
      priority: "high",
    };

    const { result } = renderHook(() =>
      useTaskFilters(mockTasks, filters)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].priority).toBe("high");
  });
});