import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) return null;

  const { state } = context;

  return (
    <div>
      <h1>Projects</h1>

      <button>Add new project</button>

      {state.projects.map((project) => (
        <div
          key={project.id}
          onClick={() => navigate(`/tasks/${project.id}`)}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;