import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import DashboardStats from "../components/dashboard/stats";

export default function Dashboard() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { state } = context;

  const stats = useMemo(() => {
    const total = state.tasks.length;
    const completed = state.tasks.filter(t => t.completed).length;
    return { total, completed, pending: total - completed };
  }, [state.tasks]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <DashboardStats
        total={stats.total}
        completed={stats.completed}
        pending={stats.pending}
      />
    </div>
  );
}