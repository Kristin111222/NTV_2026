import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

function TasksPage() {
  const context = useContext(AppContext);
  const { projectId } = useParams();
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newPriority, setNewPriority] = useState<"low" | "medium" | "high">("low");

  if (!context || !projectId) return null;

  const { state, dispatch } = context;

  const tasks = state.tasks
    .filter((task) => task.projectId === projectId)
    .filter((task) => {
      if (priorityFilter === "all") return true;
      return task.priority === priorityFilter;
    });

  const project = state.projects.find((p) => p.id === projectId);

  function handleAddTask() {
    if (!newTaskTitle) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: crypto.randomUUID(),
        title: newTaskTitle,
        completed: false,
        projectId: projectId!,
        priority: newPriority,
      },
    });
    setNewTaskTitle("");
    setNewPriority("low");
  }

  return (
    <div>
      <h1>{project?.name} - Tasks</h1>
      <h2> Add new task:  </h2>


      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add task name"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />

        <div>
          <label>
            <input
              type="radio"
              checked={newPriority === "low"}
              onChange={() => setNewPriority("low")}
            />
            Low
          </label>

          <label>
            <input
              type="radio"
              checked={newPriority === "medium"}
              onChange={() => setNewPriority("medium")}
            />
            Medium
          </label>

          <label>
            <input
              type="radio"
              checked={newPriority === "high"}
              onChange={() => setNewPriority("high")}
            />
            High
          </label>
        </div>

        <button onClick={handleAddTask}>Save</button>
      </div>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="all">All priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>


      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            display: "flex",
            gap: "10px",
            margin: "8px 0",
            alignItems: "center",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span>{task.title}</span>

          <span>Priority: {task.priority}</span>

          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            />
            Done
          </label>

          <button
            onClick={() => {
              const newTitle = prompt("Edit task:", task.title);
              if (!newTitle) return;

              dispatch({
                type: "UPDATE_TASK",
                payload: { id: task.id, title: newTitle },
              });
            }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.id })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;