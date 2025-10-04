import { ChevronsRight } from "lucide-react";
import { getProjects } from "../../sanity/lib/queries";
import ProjectSwiper from "./ProjectSwiper";

export const revalidate = 60;

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="w-full pt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <div className="flex sm:hidden items-center gap-1">
          <span className="text-zinc-700 dark:text-gray-200 text-xs">
            Drag slide
          </span>
          <ChevronsRight
            size={18}
            className="text-zinc-700 dark:text-gray-200 animate-bounce-right"
          />
        </div>
      </div>

      <ProjectSwiper projects={projects} />
    </section>
  );
};

export default Projects;
