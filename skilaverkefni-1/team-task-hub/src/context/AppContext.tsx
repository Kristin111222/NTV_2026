import { createContext, useReducer, useEffect } from "react";
import type { Task, Project } from "../types";
import type { Action } from "../types";
import { TasksSchema, ProjectsSchema } from "../types";




type State = {
  tasks: Task[];
  projects: Project[];
};



type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};





const tasksParsed = TasksSchema.safeParse(
  JSON.parse(localStorage.getItem("tasks") || "[]")
);

const projectsParsed = ProjectsSchema.safeParse(
  JSON.parse(localStorage.getItem("projects") || "[]")
);

const initialState: State = {
  tasks: tasksParsed.success ? tasksParsed.data : [],
  projects: projectsParsed.success ? projectsParsed.data : [],
};



function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (p) => p.id !== action.payload
        ),
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
}



export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);




export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    localStorage.setItem("projects", JSON.stringify(state.projects));
  }, [state.tasks, state.projects]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}