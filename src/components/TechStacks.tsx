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
    <div className="flex-1 px-5 py-4 border border-gray-200 dark:bg-neutral-900/70 dark:border-[#333] duration-100 transition-all ease-in-out rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Tech Stacks</h2>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
        <TooltipProvider delayDuration={100}>
          {data.technologies.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger className="cursor-default group">
                <div className="relative w-full aspect-square flex items-center justify-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 dark:to-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  <Image
                    src={tech.path}
                    alt={tech.name}
                    height={40}
                    width={40}
                    className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black border-zinc-700 dark:border-zinc-300"
              >
                <p className="font-medium">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TechStacks;
