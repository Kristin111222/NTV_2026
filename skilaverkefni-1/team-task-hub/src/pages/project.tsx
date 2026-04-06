import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) return null;

  const { state, dispatch } = context;

  function addProject() {
    const name = prompt("Project name?");
    if (!name) return;

    dispatch({
      type: "ADD_PROJECT",
      payload: {
        id: crypto.randomUUID(),
        name,
      },
    });
  }

  return (
    <div>
      <h1>Projects</h1>

      <button onClick={addProject}>Add new project</button>

      {state.projects.map((project) => (
        <button
          key={project.id}
          onClick={() => navigate(`/tasks/${project.id}`)}
          style={{
            display: "block",
            margin: "8px 0",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          {project.name}
        </button>
      ))}
    </div>
  );
}

export default ProjectsPage;