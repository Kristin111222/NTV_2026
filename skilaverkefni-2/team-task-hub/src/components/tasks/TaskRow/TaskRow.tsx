type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
};

type Props = {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TaskRow({
  task,
  onToggle,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="grid grid-cols-5 items-center p-3 border-b hover:bg-gray-50">
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
        onChange={onToggle}
      />

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="border px-2 py-1 rounded text-sm"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="border px-2 py-1 rounded text-sm text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}