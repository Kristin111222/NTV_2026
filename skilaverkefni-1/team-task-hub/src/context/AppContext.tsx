import { createContext, useReducer } from "react";
import type { Task, Project } from "../types";

type State = {
  tasks: Task[];
  projects: Project[];
};

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: string };

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  tasks: [],
  projects: [],
};

// function sem tekur state og action og skilar nýju state eftir því hvaða action er
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    default:
      return state;
  }
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}