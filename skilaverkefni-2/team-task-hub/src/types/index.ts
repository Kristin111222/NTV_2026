import { z } from "zod";
import { useTaskFilters } from "../useTaskFilters/useTaskFilters";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
  projectId: z.string(),
  priority: z.enum(["low", "medium", "high"]),
});

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const TasksSchema = z.array(TaskSchema);
export const ProjectsSchema = z.array(ProjectSchema);


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

export type Project = {
  id: string;
  name: string;

};

export type Filters = {
  search: string;
  status: "all" | "completed" | "active";
  priority: "all" | "low" | "medium" | "high";
};

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "UPDATE_TASK"; payload: { id: string; title: string } }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "DELETE_PROJECT"; payload: string };
