import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router";

function TasksPage() {
  const context = useContext(AppContext);
  const { projectId } = useParams();

  if (!context) return null;

  const { state, dispatch } = context;

  const tasks = state.tasks.filter(
    (task) => task.projectId === projectId
  );

  return (
    <div>
      <h1>Tasks</h1>

      <button>Add Task</button>

      {tasks.map((task) => (
        <div key={task.id}>
          {task.title}

          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.id })
            }
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;