import { useMemo } from "react";
import type { Task } from "../types";

export function useTaskStats(tasks: Task[]) {
  return useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;

    return {
      total,
      completed,
      pending: total - completed,
    };
  }, [tasks]);
}