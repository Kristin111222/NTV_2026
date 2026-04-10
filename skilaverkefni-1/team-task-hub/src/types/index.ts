import { z } from "zod";

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


export type Task = {
  id: string;
  title: string;
  completed: boolean;
  projectId: string
  priority: "low" | "medium" | "high";
};

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
