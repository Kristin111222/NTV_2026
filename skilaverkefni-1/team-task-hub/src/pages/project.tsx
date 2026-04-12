import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";

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
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-md transition p-2"
            onClick={() => navigate(`/tasks/${project.id}`)}
          >
            <CardContent className="flex flex-col gap-2">

              <p className="text-lg font-medium">
                {project.name}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  deleteProject(project.id);
                }}
                className="text-red-500 hover:text-red-700 text-sm self-start"
              >
                Delete
              </button>

            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}

export default ProjectsPage;