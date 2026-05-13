import { Card, CardContent } from "./ui/card";

type ProjectCardProps = {
  id: string;
  name: string;
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
};

function ProjectCard({
  id,
  name,
  onDelete,
  onOpen,
}: ProjectCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition p-2"
      onClick={() => onOpen(id)}
    >
      <CardContent className="flex flex-col gap-2">

        <p className="text-lg font-medium">
          {name}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="text-red-500 hover:text-red-700 text-sm self-start"
        >
          Delete
        </button>

      </CardContent>
    </Card>
  );
}

export default ProjectCard;