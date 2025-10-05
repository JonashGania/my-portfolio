import { getExperiences } from "../sanity/lib/queries";

export const revalidate = 60;

const Experience = async () => {
  const experiences = await getExperiences();

  return (
    <div className="w-full sm:w-[280px] md:w-[340px] ">
      <h2 className="text-lg font-semibold">Experience</h2>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col">
          {experiences.map((exp) => (
            <li
              key={exp._id}
              className="pl-8 pb-4 last:pb-0 list-none relative after:content-[''] after:absolute after:w-[3px] after:h-full after:bg-zinc-200 dark:after:bg-zinc-800 after:left-1 after:top-1"
            >
              <div className="absolute -left-[2.5px] top-1 z-10">
                <span className="relative flex size-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black dark:bg-white opacity-75"></span>
                  <span className="relative inline-flex size-4 rounded-full bg-black dark:bg-white"></span>
                </span>
              </div>
              <span className="text-zinc-700 dark:text-zinc-300 text-sm">
                {exp.date}
              </span>
              <h2 className="text-zinc-700 dark:text-gray-200 text-sm font-medium">
                {exp.role}
              </h2>
              <h3 className="text-zinc-700 dark:text-zinc-300 text-xs">
                {exp.company}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs pt-4">
                {exp.description}
              </p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
