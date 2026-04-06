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
  //tasks: Task[];
};

export type Filters = {
  search: string;
  status: "all" | "completed" | "active";
  priority: "all" | "low" | "medium" | "high";
};