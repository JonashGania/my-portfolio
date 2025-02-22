import data from "../constants";
import Image from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechStacks = () => {
  return (
    <div className="flex-1 px-4 py-2 border border-gray-200 dark:bg-[#111] dark:border-[#333] rounded-sm">
      <h2 className="text-lg font-semibold">Tech Stacks</h2>
      <div className="tech-stack-grid">
        <TooltipProvider delayDuration={100}>
          {data.technologies.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image src={tech.path} alt="icon" height={40} width={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TechStacks;
