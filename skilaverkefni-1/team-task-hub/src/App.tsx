import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ProjectsPage from "./pages/project";
import TasksPage from "./pages/task";

import { Card } from "./components/ui/card";

function App() {
  return (
    <Card>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/tasks/:projectId" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
    </Card>
  );
}

export default App;
