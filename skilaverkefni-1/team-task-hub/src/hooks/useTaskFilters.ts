import { useMemo } from "react";
import type { Task, Filters } from "../types";



export function useTaskFilters(tasks: Task[], filters: Filters) {
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
    
      const matchesSearch = task.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    
      const matchesStatus =
        filters.status === "all" ||
        (filters.status === "completed" && task.completed) ||
        (filters.status === "active" && !task.completed);

     
      const matchesPriority =
        filters.priority === "all" ||
        task.priority === filters.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, filters]);

  return filteredTasks;
}