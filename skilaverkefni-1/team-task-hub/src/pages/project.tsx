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

  return (
    <div className="bg-gray-500 text-white p-10">
      
      
      <div className="flex flex-col items-center pt-10 gap-6">
        <h1 className="text-3xl font-bold">Projects</h1>

        <button
          onClick={addProject}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Add project
        </button>
      </div>

   
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {state.projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-md transition"
            onClick={() => navigate(`/tasks/${project.id}`)}
          >
            <CardContent>
              <p className="text-lg font-medium">{project.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}

export default ProjectsPage;