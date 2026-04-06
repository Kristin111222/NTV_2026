import { createContext, useReducer } from "react";
import type { Task, Project } from "../types";

// ---------------- TYPES ----------------

type State = {
  tasks: Task[];
  projects: Project[];
};

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "ADD_PROJECT"; payload: Project };

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

// ---------------- INITIAL STATE ----------------

const initialState: State = {
  tasks: [],
  projects: [],
};

// ---------------- REDUCER ----------------

function reducer(state: State, action: Action): State {
  switch (action.type) {
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

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
}

// ---------------- CONTEXT ----------------

export const AppContext = createContext<AppContextType | null>(null);

// ---------------- PROVIDER ----------------

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}