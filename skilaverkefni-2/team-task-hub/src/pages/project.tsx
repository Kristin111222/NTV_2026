import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

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

  function deleteProject(id: string) {
    dispatch({
      type: "DELETE_PROJECT",
      payload: id,
    });
  }

  return (
    <div className="border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center">

      <h1 className="text-gray-800 text-lg font-semibold mt-6">
        Projects
      </h1>

      <button
        onClick={addProject}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 mt-4"
      >
        Add project
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mt-8">

        {state.projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            onDelete={deleteProject}
            onOpen={(id) => navigate(`/tasks/${id}`)}
          />
        ))}

      </div>
    </div>
  );
}

export default ProjectsPage;