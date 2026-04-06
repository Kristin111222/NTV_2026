import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ProjectsPage from "./pages/project";
import TasksPage from "./pages/task";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/tasks/:projectId" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
