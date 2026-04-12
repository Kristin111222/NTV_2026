import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import DashboardStats from "../components/dashboard/stats";
import { useTaskFilters } from "../hooks/useTaskFilters";
import type { Filters } from "../types";

function TasksPage() {
  const context = useContext(AppContext);
  const { projectId } = useParams();

  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "low" | "medium" | "high"
  >("all");

  const [search, setSearch] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newPriority, setNewPriority] =
    useState<"low" | "medium" | "high">("low");

  if (!context || !projectId) return null;

  const { state, dispatch } = context;

  const project = state.projects.find((p) => p.id === projectId);


  const filters: Filters = {
    search,
    status: "all",
    priority: priorityFilter,
  };


  const filteredTasks = useTaskFilters(
    state.tasks.filter((t) => t.projectId === projectId),
    filters
  );


  const stats = useMemo(() => {
    const total = filteredTasks.length;
    const completed = filteredTasks.filter((t) => t.completed).length;
    return { total, completed, pending: total - completed };
  }, [filteredTasks]);

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
    <div className="min-h-screen p-6 max-w-5xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">
        {project?.name} - Tasks
      </h1>


      <DashboardStats
        total={stats.total}
        completed={stats.completed}
        pending={stats.pending}
      />


      <Card>
        <CardContent className="flex gap-3 flex-wrap items-center">
          <input
            type="text"
            placeholder="New task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="border px-3 py-2 rounded-lg flex-1"
          />

          <select
            value={newPriority}
            onChange={(e) =>
              setNewPriority(e.target.value as "low" | "medium" | "high")
            }
            className="border px-3 py-2 rounded-lg"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            onClick={handleAddTask}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </CardContent>
      </Card>


      <Card>
        <CardContent className="p-0">


          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">Tasks</h2>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-3 py-1 rounded-lg"
              />

              <select
                value={priorityFilter}
                onChange={(e) =>
                  setPriorityFilter(
                    e.target.value as "all" | "low" | "medium" | "high"
                  )
                }
                className="border px-3 py-1 rounded-lg"
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>


          <div className="grid grid-cols-5 p-3 border-b text-sm font-medium">
            <span>Task</span>
            <span>Status</span>
            <span>Priority</span>
            <span>Done</span>
            <span>Actions</span>
          </div>


          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="grid grid-cols-5 items-center p-3 border-b hover:bg-gray-50"
            >
              <span className={task.completed ? "line-through opacity-50" : ""}>
                {task.title}
              </span>

              <span>
                {task.completed ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    completed
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                    pending
                  </span>
                )}
              </span>

              <span>{task.priority}</span>

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: task.id })
                }
              />

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const newTitle = prompt("Edit task:", task.title);
                    if (!newTitle) return;

                    dispatch({
                      type: "UPDATE_TASK",
                      payload: { id: task.id, title: newTitle },
                    });
                  }}
                  className="border px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: task.id })
                  }
                  className="border px-2 py-1 rounded text-sm text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </CardContent>
      </Card>
    </div>
  );
}

export default TasksPage;